import { useState } from 'react';
import * as Yup from 'yup';
import { ValidationSchema } from '../../../utils/validation';
import { useLoading } from '../../../contexts/loading-context';
import { useToast } from 'react-native-toast-notifications';
import { useCompany } from '../../../contexts/company-context';
import { createCompany } from '../../../api/create-company';
import { useUser } from '../../../contexts/user-context';

export const useCompanyData = () => {
  const { companyData } = useCompany();
  const { updateUserContextData } = useUser();
  const { setIsLoading, setError } = useLoading();
  const toast = useToast();

  const [name, setName] = useState(companyData.name);
  const [email, setEmail] = useState(companyData.email);
  const [address, setAddress] = useState(companyData.address);
  const [phone, setPhone] = useState(companyData.phone);
  const [workHours, setWorkHours] = useState(companyData.workHours);
  const [serviceType, setServiceType] = useState(companyData.serviceType);
  const [takingOut, setTakingOut] = useState(companyData.takingOut);
  const [services, setServices] = useState(companyData.services);
  const [locationLatitude, setLocationLatitude] = useState(
    companyData.locationLatitude
  );
  const [locationLongitude, setLocationLongitude] = useState(
    companyData.locationLongitude
  );

  const changeName = text =>
    setName(text ? text[0].toUpperCase() + text.slice(1) : text);
  const changeEmail = text => setEmail(text);
  const changeAddress = text => {
    console.log(1, text);
    setAddress(text);
  };
  const changePhone = text => setPhone(text);
  const changeWorkHours = text => setWorkHours(text);
  const changeServiceType = text => setServiceType(text);
  const changeTakingOut = value => setTakingOut(value);
  const changeLocationLatitude = value => setLocationLatitude(value);
  const changeLocationLongitude = value => setLocationLongitude(value);

  const updateCompanyData = async () => {
    try {
      await Yup.object({
        name: ValidationSchema.name,
        phone: ValidationSchema.phone,
        email: ValidationSchema.email,
      }).validate({
        name,
        phone,
        email,
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
      const data = await createCompany({ name, phone, description: '' });
      updateUserContextData({ companyId: data.companyId });
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
    name,
    email,
    address,
    phone,
    workHours,
    serviceType,
    takingOut,
    services,
    locationLatitude,
    locationLongitude,
    changeName,
    changeEmail,
    changeAddress,
    changePhone,
    changeWorkHours,
    changeServiceType,
    changeTakingOut,
    setServices,
    changeLocationLatitude,
    changeLocationLongitude,
    updateCompanyData,
  };
};
