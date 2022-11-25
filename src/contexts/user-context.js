import PropTypes from 'prop-types';
import React from 'react-native';
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null);
  const [userType, setUserType] = useState(null);

  const logIn = ({name, type}) => {
    setIsLoggedIn(true);
    setUserName(name);
    setUserType(type);
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setUserName(null);
    setUserType(null);
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