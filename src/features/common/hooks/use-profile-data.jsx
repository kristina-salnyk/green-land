import { useState } from 'react';
import { useUser } from '../../../contexts/user-context';
import * as Yup from 'yup';
import { ValidationSchema } from '../components/auth-form/validation';
import { Alert } from 'react-native';
import { useLoading } from '../../../contexts/loading-context';
import { profileUpdate } from '../../../api/profile-update';

export const useProfileData = () => {
  const { userData, updateData } = useUser();
  const { setIsLoading, setError } = useLoading();

  const [name, setName] = useState(userData.name);
  const [phone, setPhone] = useState(userData.phone);
  const [email, setEmail] = useState(userData.email);
  const [image, setImage] = useState(userData.image);

  const changeName = text => setName(text);
  const changePhone = text => setPhone(text);
  const changeEmail = text => setEmail(text);
  const changeImage = text => setImage(text);

  const updateUserData = async () => {
    try{
      await Yup.object({
        name: ValidationSchema.name,
        phone: ValidationSchema.phone,
        email: ValidationSchema.email,
      }).validate({
        name,
        phone,
        email
      });
    } catch (error) {
      Alert.alert(error.message);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const data = await profileUpdate(userData.id, {
        name,
        phone,
        email,
        image,
      });
      updateData(data);

      Alert.alert('Profile data updated');
    } catch (error) {
      setError(error.message);
      Alert.alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  
  return {
    name,
    phone,
    email,
    image,
    changeName,
    changePhone,
    changeEmail,
    changeImage,
    updateUserData,
  };
};
