import { api } from './api';

export const getCompanies = async () => {
  const response = await api.get('/api/v1/company');
  return response.data;
};
