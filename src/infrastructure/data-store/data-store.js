import * as SecureStore from 'expo-secure-store';

export const storeUserData = async (data) => {
  await SecureStore.setItemAsync('user-data', JSON.stringify(data));
};

export const retrieveUserData = async () => {
  const data = await SecureStore.getItemAsync('user-data');
  return JSON.parse(data);
};

export const deleteUserData = async () => {
  await SecureStore.deleteItemAsync('user-data');
};