import React, {useState,  useContext, createContext, useEffect, useMemo} from 'react';

import { companiesRequest, companiesTransform } from './companies.service';

import { LocationContext } from '../location/location.context';

export const CompaniesContext = createContext();

export const CompaniesContextProvider = ({children}) => {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {location} = useContext(LocationContext);

  const retrieveCompanies = (loc) => {

    setIsLoading(true);
    setCompanies([]);
    setTimeout(()=>{
      companiesRequest(loc)
        .then(companiesTransform)
        .then((results) => {
          setIsLoading(false);
          setCompanies(results);
        }).catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    },2000);

  };


  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveCompanies(locationString);
    }
  }, [location]);



  return(
    <CompaniesContext.Provider 
      value={{
        companies,
        isLoading,
        error,
      }}>
      {children}
    </CompaniesContext.Provider>
  );
};