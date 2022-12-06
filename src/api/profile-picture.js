import { api } from './api';
import FormData from 'form-data';

export const profilePicture = async file => {
  const uriParts = file.split('.');
  const fileType = uriParts[uriParts.length - 1];

  let formData = new FormData();
  formData.append('image', {
    uri: file,
    name: `photo.${fileType}`,
    type: `image/${fileType}`,
  });

  const response = await api.patch('/api/v1/users/profile-picture', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: '*/*',
    },
  });
  return response.data;
};
