import PropTypes from 'prop-types';
import React from 'react-native';
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState(null);

    const logIn = (name) => {
        setIsLoggedIn(true);
        setUserName(name);
    };

    const logOut = () => {
        setIsLoggedIn(false);
        setUserName(null);
    };

    return (
        <UserContext.Provider value={{ isLoggedIn, userName, logIn, logOut }}>
            {children}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.Component,
};