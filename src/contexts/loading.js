import React from 'react-native';
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider
      value={{ isLoading, error, setIsLoading, setError }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

LoadingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
