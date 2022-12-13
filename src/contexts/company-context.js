import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import React from 'react-native';
import { useUser } from './user-context';
import { getCompanyById } from '../api/get-company-by-id';
import { getCollectionPointById } from '../api/get-collection-point-by-id';

const initCompanyState = {
  companyId: -1,
  name: '',
  email: '',
  address: '',
  phone: '',
  workHours: '',
  paymentType: 'PAID',
  takingOut: true,
  services: [],
  locationLatitude: 0,
  locationLongitude: 0,
};

const CompanyContext = createContext();

export const useCompany = () => useContext(CompanyContext);

export const CompanyProvider = ({ children }) => {
  const [companyData, setCompanyData] = useState(initCompanyState);
  const { userData } = useUser();

  useEffect(() => {
    if (userData.companyId === -1) {
      return;
    }

    (async () => {
      try {
        const companyData = await getCompanyById(userData.companyId);
        console.log(companyData);
        const collectionPointId = companyData.collectionPoints[0].id;
        const collectionPointData = await getCollectionPointById(
          collectionPointId
        );
        console.log(collectionPointData);
        updateCompanyContextData({
          companyId: companyData.id,
          name: companyData.name,
          email: companyData.email,
          address: collectionPointData.address,
          phone: companyData.phone,
          workHours: '',
          paymentType: collectionPointData.paymentType,
          takingOut: collectionPointData.takingOut,
          services: [],
          locationLatitude: collectionPointData.locationLatitude,
          locationLongitude: collectionPointData.locationLongitude,
        });
      } catch (error) {
        return;
      }
    })();
  }, []);

  const updateCompanyContextData = data => {
    setCompanyData(prevState => ({ ...prevState, ...data }));
  };

  return (
    <CompanyContext.Provider value={{ companyData, updateCompanyContextData }}>
      {children}
    </CompanyContext.Provider>
  );
};

CompanyProvider.propTypes = {
  children: PropTypes.node,
};
