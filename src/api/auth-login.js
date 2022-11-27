import api from './api';

export const authLogin = async({login, password}) => {
  const response = await api.get(`/users?login=${login}`);

  if (response?.data?.length === 0) {
    throw new Error('User not registered');
  }

  const userData = response.data[0];
  if (userData?.password !== password) {
    throw new Error('Incorrect password');
  }

  return userData;
};