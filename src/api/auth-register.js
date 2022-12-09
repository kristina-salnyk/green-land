import { api, clearAuthHeader } from './api';

export const authRegister = async user => {
  clearAuthHeader();
  const response = await api.post('/api/v1/auth/reg', user);
  return response.data;
};
