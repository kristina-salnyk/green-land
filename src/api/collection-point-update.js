import { api } from './api';

export const collectionPointUpdate = async (id, data) => {
  const response = await api.put(`/api/v1/collectionpoint/${id}`, data);
  return response.data;
};
