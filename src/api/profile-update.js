import {api} from './api';

export const profileUpdate = async (id, data) => {
  const response = await api.put(`/users/${id}`, data);
  return response.data;
};
