import React, {useState,  useContext, createContext, useEffect, useMemo} from 'react';

import { categoriesRequest, categoriesTransform } from './categories.service';

import { LocationContext } from '../location/location.context';

export const CategoriesContext = createContext();

export const CategoriesContextProvider = ({children}) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const retrieveCategories = (loc) => {

    setIsLoading(true);
    setCategories([]);
    setTimeout(()=>{
      categoriesRequest(loc)
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
    console.log(location);
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveCompanies(locationString);
    }
  }, [location?.lat, location?.lng]);



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