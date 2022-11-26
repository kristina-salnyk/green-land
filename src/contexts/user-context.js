import PropTypes from 'prop-types';
import React from 'react-native';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ROUTES, USER_TYPES } from '../constants';
import EncryptedStorage from 'react-native-encrypted-storage';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userType, setUserType] = useState(null);
  const [userLogin, setUserLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const setUserData = useCallback(async () => {
    try {
      await EncryptedStorage.setItem(
        'user-data',
        JSON.stringify({
          userName,
          userType,
          userLogin,
          userPassword,
        })
      );
    } catch (error) {
      return null;
    }
  }, [userName, userType, userLogin, userPassword]);

  const getUserData = useCallback(async () => {
    try {
      const userData = await EncryptedStorage.getItem('user-data');
      if (!userData) {
        return;
      }
      setUserName(userData.name);
      setUserType(userData.userType);
      setUserLogin(userData.login);
      setUserPassword(userData.password);
    } catch (error) {
      return null;
    }
  }, [setUserName, setUserType, setUserLogin, setUserPassword]);

  useEffect(() => {
    setUserData();
  }, [setUserData, userName, userType, userLogin, userPassword]);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  const logIn = (userData, navigation) => {
    setIsLoggedIn(true);
    setUserName(userData.name);
    setUserType(userData.isAdmin ? USER_TYPES.ADMIN : USER_TYPES.USER);
    setUserLogin(userData.login);
    setUserPassword(userData.password);

    navigation.reset({
      index: 0,
      routes: [{ name: ROUTES.PROFILE }],
    });
  };

  const logOut = navigation => {
    setIsLoggedIn(false);
    setUserName('');
    setUserType(null);
    setUserLogin('');
    setUserPassword('');

    navigation.reset({
      index: 0,
      routes: [{ name: ROUTES.HOME }],
    });
  };

  return (
    <UserContext.Provider
      value={{ isLoggedIn, userName, userType, logIn, logOut }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
