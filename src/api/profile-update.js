import {api} from './api';

// TODO: change to back-end method
export const profileUpdate = async (id, data) => {
  const response = await api.put(`/users/${id}`, data);
  return response.data;
};
