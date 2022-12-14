import React, { useState, useContext, createContext, useEffect } from 'react';
import { companiesRequest, companiesTransform } from './companies.service';
import { LocationContext } from '../location/location.context';
import { getCompanies } from '../../api/get-companies';
import { getCollectionpoint } from '../../api/get-collectionpoint';
import { getCategories } from '../../api/get-categories';

export const CompaniesContext = createContext();


export const CompaniesContextProvider = ({children}) => {
  const [categories, setCategories] = useState([]);
=======

  const [companies, setCompanies] = useState([]);
  const [collectionpoint, setCollectionpoint] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const {location} = useContext(LocationContext);

  // const retrieveCompanies = (loc) => {

  //   setIsLoading(true);
  //   setCompanies([]);
  //   setTimeout(()=>{
  //     companiesRequest(loc)
  //       .then(companiesTransform)
  //       .then((results) => {
  //         setIsLoading(false);
  //         setCompanies(results);
  //       }).catch((err) => {
  //         setIsLoading(false);
  //         setError(err);
  //       });
  //   },2000);

  // };


  // useEffect(() => {
  //   if (location) {
  //     const locationString = `${location.lat},${location.lng}`;
  //     retrieveCompanies(locationString);
  //   }
  // }, [location]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const data = await getCompanies();
        const list = data.map(({name, collectionPoints }) => ({name, collectionPoints }));
        
        setCompanies(list);
   
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const data = await getCollectionpoint();
        const list = data.map(({ id, address }) => ({ id, address }));
        
        setCollectionpoint(list);
    
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

 

  useEffect(() => {
    (async () => {
      setIsLoading(true);


      try {
        const data = await getCategories();
        const list = data.map(({name, collectionPoints }) => ({name, collectionPoints }));
        
        setCategories(list);
   
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);


  return(
    <CompaniesContext.Provider 


      value={{
        categories,
        collectionpoint,
        companies,
        isLoading,
        error,
      }}
    >
      {children}
    </CompaniesContext.Provider>
  );
};
