import { api } from './api';

export const authRegister = async user => {
  const response = await api.post('/api/v1/auth/reg', user);
  return response.data;
};
