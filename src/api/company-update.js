import { api } from './api';

export const companyUpdate = async (id, data) => {
  const response = await api.put(`/api/v1/company/${id}`, data);
  return response.data;
};
