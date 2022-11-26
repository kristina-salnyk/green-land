import PropTypes from 'prop-types';
import React from 'react-native';
import { createContext, useContext, useState } from 'react';
import { ROUTES, USER_TYPES } from '../constants';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null);
  const [userType, setUserType] = useState(null);

  const logIn = (userData, navigation) => {
    setIsLoggedIn(true);
    setUserName(userData.name);
    setUserType(userData.isAdmin ? USER_TYPES.ADMIN : USER_TYPES.USER);

    navigation.reset({
      index: 0,
      routes: [{ name: ROUTES.PROFILE }],
    });
  };

  const logOut = (navigation) => {
    setIsLoggedIn(false);
    setUserName(null);
    setUserType(null);

    navigation.reset({
      index: 0,
      routes: [{ name: ROUTES.HOME}],
    });
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, userName, userType, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};