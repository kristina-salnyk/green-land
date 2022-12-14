import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import React from 'react-native';
import { useUser } from './user-context';
import { getCompanyById } from '../api/get-company-by-id';
import { getCollectionPointById } from '../api/get-collection-point-by-id';

const initCompanyState = {
  companyId: -1,
  collectionPointId: -1,
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
  const { userData, isLoading } = useUser();

  useEffect(() => {
    (async () => {
      try {
        if (userData.companyId === -1) {
          return;
        }
        const companyData = await getCompanyById(userData.companyId);
        const pointsLength = companyData?.collectionPoints?.length;
        const collectionPointId =
          companyData?.collectionPoints[pointsLength - 1]?.id ?? -1;

        updateCompanyContextData({
          companyId: companyData.id,
          name: companyData.name,
          email: companyData.description,
          phone: companyData.phone,
          collectionPointId,
        });

        if (collectionPointId === -1) {
          return;
        }
        const collectionPointData = await getCollectionPointById(
          collectionPointId
        );

        updateCompanyContextData({
          collectionPointId: collectionPointData.id,
          address: collectionPointData.address,
          workHours: collectionPointData.description,
          paymentType: collectionPointData.paymentType,
          takingOut: collectionPointData.takingOut,
          services: collectionPointData.serviceTypeIds,
          locationLatitude: collectionPointData.locationLatitude,
          locationLongitude: collectionPointData.locationLongitude,
        });
      } catch (error) {
        return null;
      }
    })();
  }, [userData.companyId]);

  const updateCompanyContextData = data => {
    setCompanyData(prevState => ({ ...prevState, ...data }));
  };

  return (
    <>
      {!isLoading ? (
        <CompanyContext.Provider
          value={{ companyData, updateCompanyContextData }}
        >
          {children}
        </CompanyContext.Provider>
      ) : null}
    </>
  );
};

CompanyProvider.propTypes = {
  children: PropTypes.node,
};
