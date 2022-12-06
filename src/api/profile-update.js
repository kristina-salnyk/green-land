import {api} from './api';

export const profileUpdate = async (data) => {
  const response = await api.patch('/api/v1/users', data);
  return response.data;
};
