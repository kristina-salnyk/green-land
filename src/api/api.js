import axios from 'axios';
import { BASE_URL } from '../constants';
import base64 from 'react-native-base64';

export const api = axios.create({
  baseURL: BASE_URL,
});

export const setAuthHeader = (email, password) => {
  const credentials = base64.encode(email + ':' + password);
  api.defaults.headers.common.Authorization = 'Basic ' + credentials;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};