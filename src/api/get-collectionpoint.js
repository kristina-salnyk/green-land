import { api } from './api';

export const getCollectionpoint = async () => {
  const response = await api.get('/api/v1/collectionpoint');
  return response.data;
};
