import { useState } from 'react';
import * as Yup from 'yup';
import { ValidationSchema } from '../../../utils/validation';
import { useLoading } from '../../../contexts/loading-context';
import { useToast } from 'react-native-toast-notifications';
import { useCompany } from '../../../contexts/company-context';
import { createCompany } from '../../../api/create-company';
import { useUser } from '../../../contexts/user-context';
import { createCollectionPoint } from '../../../api/create-collection-point';
import { ROUTES } from '../../../constants';
import { collectionPointUpdate } from '../../../api/collection-point-update';
import { companyUpdate } from '../../../api/company-update';

export const useCompanyData = ({ navigation }) => {
  const { companyData, updateCompanyContextData } = useCompany();
  const { updateUserContextData } = useUser();
  const { setIsLoading, setError } = useLoading();
  const toast = useToast();

  const [companyId, setCompanyId] = useState(companyData.companyId);
  const [name, setName] = useState(companyData.name);
  const [email, setEmail] = useState(companyData.email);
  const [address, setAddress] = useState(companyData.address);
  const [phone, setPhone] = useState(companyData.phone);
  const [workHours, setWorkHours] = useState(companyData.workHours);
  const [paymentType, setPaymentType] = useState(companyData.paymentType);
  const [takingOut, setTakingOut] = useState(companyData.takingOut);
  const [services, setServices] = useState([]);
  const [locationLatitude, setLocationLatitude] = useState(
    companyData.locationLatitude
  );
  const [locationLongitude, setLocationLongitude] = useState(
    companyData.locationLongitude
  );

  const changeCompanyId = value => setCompanyId(value);
  const changeName = text =>
    setName(text ? text[0].toUpperCase() + text.slice(1) : text);
  const changeEmail = text => setEmail(text);
  const changeAddress = text => {
    setAddress(text);
  };
  const changePhone = text => setPhone(text);
  const changeWorkHours = text => setWorkHours(text);
  const changePaymentType = text => setPaymentType(text);
  const changeTakingOut = value => setTakingOut(value);
  const changeServiceState = (id, state) => {
    setServices(prevState => {
      const newServices = [...prevState];
      const idx = newServices.findIndex(item => item.id === id);
      newServices[idx].checked = state;
      return newServices;
    });
  };
  const changeServices = items => {
    const newItems = [...items].map(item => {
      const newItem = { ...item };
      newItem.checked = companyData.services.includes(item.id);
      return newItem;
    });
    setServices([...newItems]);
  };
  const changeLocationLatitude = value => setLocationLatitude(value);
  const changeLocationLongitude = value => setLocationLongitude(value);

  const updateCompanyData = async () => {
    const isNewCompany = companyId === -1;

    try {
      await Yup.object({
        name: ValidationSchema.name,
        phone: ValidationSchema.phone,
        email: ValidationSchema.email,
        address: ValidationSchema.address,
        services: ValidationSchema.services,
      }).validate({
        name,
        phone,
        email,
        address,
        services: services.filter(item => item.checked),
      });
    } catch (error) {
      toast.show(error.message, {
        type: 'custom_toast',
        animationDuration: 100,
        data: { type: 'fail' },
      });
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      let fetchedCompanyData;
      let fetchedCollectionPointData;

      if (companyId === -1) {
        fetchedCompanyData = await createCompany({
          name,
          phone,
          description: email,
        });
      } else {
        fetchedCompanyData = await companyUpdate(companyId, {
          name,
          phone,
          description: email,
        });
      }
      changeCompanyId(fetchedCompanyData.id);

      updateCompanyContextData({
        companyId: fetchedCompanyData.id,
        name: fetchedCompanyData.name,
        email: fetchedCompanyData.description,
        phone: fetchedCompanyData.phone,
      });

      const pointsLength = fetchedCollectionPointData?.collectionPoints?.length;
      const collectionPointId =
        pointsLength > 0
          ? fetchedCompanyData?.collectionPoints[pointsLength - 1]?.id ?? -1
          : -1;

      if (collectionPointId === -1) {
        fetchedCollectionPointData = await createCollectionPoint({
          address,
          company: fetchedCompanyData.id,
          description: workHours,
          locationLatitude,
          locationLongitude,
          mainPoint: true,
          paymentType,
          serviceTypeIds: services
            .filter(item => item.checked)
            .map(item => item.id),
          takingOut,
        });
      } else {
        fetchedCollectionPointData = await collectionPointUpdate(
          collectionPointId,
          {
            address,
            company: fetchedCompanyData.id,
            description: workHours,
            locationLatitude,
            locationLongitude,
            mainPoint: true,
            paymentType,
            serviceTypeIds: services
              .filter(item => item.checked)
              .map(item => item.id),
            takingOut,
          }
        );
      }

      updateCompanyContextData({
        address: fetchedCollectionPointData.address,
        workHours: fetchedCollectionPointData.description,
        paymentType: fetchedCollectionPointData.paymentType,
        takingOut: fetchedCollectionPointData.takingOut,
        services: services.filter(item => item.checked).map(item => item.id),
        locationLatitude: fetchedCollectionPointData.locationLatitude,
        locationLongitude: fetchedCollectionPointData.locationLongitude,
      });

      if (!isNewCompany) {
        toast.show('Company data updated', {
          type: 'custom_toast',
          animationDuration: 100,
          data: { type: 'success' },
        });
      } else {
        navigation.navigate(ROUTES.COMPANY_PROFILE);
      }

    } catch (error) {
      setError(error.message);
      toast.show(error.message, {
        type: 'custom_toast',
        animationDuration: 100,
        data: { type: 'fail' },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    companyId,
    name,
    email,
    address,
    phone,
    workHours,
    paymentType,
    takingOut,
    services,
    locationLatitude,
    locationLongitude,
    changeCompanyId,
    changeName,
    changeEmail,
    changeAddress,
    changePhone,
    changeWorkHours,
    changePaymentType,
    changeTakingOut,
    changeServiceState,
    changeServices,
    changeLocationLatitude,
    changeLocationLongitude,
    updateCompanyData,
  };
};
