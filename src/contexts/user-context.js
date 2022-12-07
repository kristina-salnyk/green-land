import PropTypes from 'prop-types';
import React from 'react-native';
import { createContext, useContext, useEffect, useState } from 'react';
import { ROUTES } from '../constants';
import {
  deleteUserData,
  retrieveUserData,
  storeUserData,
} from '../infrastructure/data-store/data-store';
import { clearAuthHeader, setAuthHeader } from '../api/api';

const initUserState = {
  name: '',
  email: '',
  phone: '',
  password: '',
  role: null,
  image: null,
  companyName: '',
};
const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(initUserState);

  useEffect(() => {
    if (!userData?.email) {
      return;
    }
    storeUserData(userData);
  }, [userData]);

  useEffect(() => {
    setIsLoading(true);

    retrieveUserData()
      .then(data => {
        if (!data) {
          return;
        }
        setUserData({ ...data });
        setIsLoggedIn(true);
        setAuthHeader(data.email, data.password);
      })
      .finally(() => setIsLoading(false));
  }, [setUserData]);

  const logIn = (data, navigation) => {
    setUserData({ ...data });
    setIsLoggedIn(true);
    setAuthHeader(data.email, data.password);

    navigation.reset({
      index: 0,
      routes: [{ name: ROUTES.PROFILE }],
    });
  };

  const logOut = navigation => {
    setUserData(initUserState);
    setIsLoggedIn(false);
    clearAuthHeader();

    deleteUserData();

    navigation.reset({
      index: 0,
      routes: [{ name: ROUTES.HOME }],
    });
  };

  const updateData = data => {
    setUserData(prevState => ({ ...prevState, ...data }));
  };

  return (
    <UserContext.Provider
      value={{ isLoggedIn, userData, isLoading, logIn, logOut, updateData }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
