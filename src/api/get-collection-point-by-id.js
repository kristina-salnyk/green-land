import { api } from './api';

export const getCollectionPointById = async id => {
  const response = await api.get(`/api/v1/collectionpoint/${id}`);
  return response.data;
};
