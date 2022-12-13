import { api } from './api';

export const getCompanyById = async id => {
  const response = await api.get(`/api/v1/company/${id}`);
  return response.data;
};
