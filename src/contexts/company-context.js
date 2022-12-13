import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import React from 'react-native';

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
