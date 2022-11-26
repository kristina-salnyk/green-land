import api from './api';

export const authRegister = async (user) => {
  const response = await api.post('/users', user);
  return  response.data;
};