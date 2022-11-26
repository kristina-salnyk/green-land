import PropTypes from 'prop-types';
import React from 'react-native';
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ROUTES } from '../constants';
import { retrieveUserData, storeUserData } from '../infrastructure/data-store/data-store';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!userData) {
      return;
    }
    storeUserData(userData).catch();
  }, [userData]);

  useEffect(() => {
    setIsLoading(true);

    retrieveUserData().then(data => {
      if (!data) {
        return;
      }
      setUserData({ ...data });
      setIsLoggedIn(true);
    }).catch().finally(() => setIsLoading(false));
  }, [setUserData]);

  const logIn = (userData, navigation) => {
    setUserData({ ...userData });
    setIsLoggedIn(true);

    navigation.reset({
      index: 0,
      routes: [{ name: ROUTES.PROFILE }],
    });
  };

  const logOut = navigation => {
    setIsLoggedIn(false);
    setUserData(null);

    navigation.reset({
      index: 0,
      routes: [{ name: ROUTES.HOME }],
    });
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, userData, isLoading, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
