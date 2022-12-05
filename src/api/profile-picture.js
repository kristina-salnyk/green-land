import { api } from './api';
import FormData from 'form-data';

export const profilePicture = async file => {
  const formData = new FormData();
  formData.append('image', file);
  const response = await api.patch('/api/v1/users/profile-picture', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};
