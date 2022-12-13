import { api } from './api';

export const createCollectionPoint = async data => {
  const response = await api.post('/api/v1/collectionpoint', data);
  return response.data;
};
