import { api } from './api';

export const authLogin = async () => {
  const response = await api.get('/test');
  return response.data;
};
