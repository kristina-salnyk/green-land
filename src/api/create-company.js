import { api } from './api';

export const createCompany = async data => {
  const response = await api.post('/api/v1/company', data);
  return response.data;
};
