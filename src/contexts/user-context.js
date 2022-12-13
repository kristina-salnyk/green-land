import PropTypes from 'prop-types';
import React from 'react-native';
import { createContext, useContext, useEffect, useState } from 'react';
import {
  deleteUserData,
  retrieveUserData,
  storeUserData,
} from '../infrastructure/data-store/data-store';
import { clearAuthHeader, setAuthHeader } from '../api/api';
import { authLogin } from '../api/auth-login';
import * as FileSystem from 'expo-file-system';

const initUserState = {
  name: '',
  email: '',
  phone: '',
  password: '',
  role: null,
  image: null,
  companyId: -1,
};
const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({ ...initUserState });

  const logIn = async ({ email, password }) => {
    setAuthHeader(email, password);

    const data = await authLogin({
      email,
      password,
    });

    let image = null;
    if (data.profilePicture) {
      image = FileSystem.cacheDirectory + `profile_image_${Date.now()}.png`;
      await FileSystem.writeAsStringAsync(image, data.profilePicture, {
        encoding: FileSystem.EncodingType.Base64,
      });
    }

    setUserData(prevState => ({
      ...prevState,
      name: data.firstName,
      email,
      phone: data.phone,
      password,
      image,
      role: data.roles[0].name,
      companyId: data.companyId,
    }));

    setIsLoggedIn(true);
    await storeUserData({ email, password });
  };

  useEffect(() => {
    (async () => {
      const credentials = await retrieveUserData();
      if (!credentials) {
        return;
      }

      setIsLoading(true);
      try {
        await logIn(credentials);
      } catch (error) {
        clearAuthHeader();
        await deleteUserData();
        setIsLoggedIn(false);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const logOut = async () => {
    clearAuthHeader();
    setUserData({ ...initUserState });
    setIsLoggedIn(false);
    await deleteUserData();
  };

  const updateUserContextData = data => {
    setUserData(prevState => ({ ...prevState, ...data }));
  };

  return (
    <>
      {!isLoading && (
        <UserContext.Provider
          value={{
            isLoggedIn,
            userData,
            isLoading,
            setIsLoading,
            logIn,
            logOut,
            updateUserContextData,
          }}
        >
          {children}
        </UserContext.Provider>
      )}
    </>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
