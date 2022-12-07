import { useState } from 'react';
import { useUser } from '../../../contexts/user-context';
import * as Yup from 'yup';
import { ValidationSchema } from '../components/auth-form/validation';
import { useLoading } from '../../../contexts/loading-context';
import { profileUpdate } from '../../../api/profile-update';
import { uploadProfilePicture } from '../../../api/upload-profile-picture';
import { useToast } from 'react-native-toast-notifications';

export const useProfileData = () => {
  const { userData, updateData } = useUser();
  const { setIsLoading, setError } = useLoading();
  const toast = useToast();

  const [name, setName] = useState(userData.name);
  const [phone, setPhone] = useState(userData.phone);
  const [email, setEmail] = useState(userData.email);
  const [image, setImage] = useState(userData.image);

  const changeName = text =>
    setName(text ? (text[0].toUpperCase() + text.slice(1)) : text);
  const changePhone = text => setPhone(text);
  const changeEmail = text => setEmail(text);
  const changeImage = text => setImage(text);

  const updateUserData = async () => {
    try {
      await Yup.object({
        name: ValidationSchema.name,
        phone: ValidationSchema.phone,
        email: ValidationSchema.email,
      }).validate({
        name,
        phone,
        email,
      });
    } catch (error) {
      toast.show(error.message, {
        type: 'custom_toast',
        animationDuration: 100,
        data: {type: 'fail'}
      });
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      if (image) {
        await uploadProfilePicture(image);
      }
      await profileUpdate({
        firstName: name,
        lastName: name,
        phone,
        email
      });
      updateData({ name, phone, email, image });
      toast.show('User profile updated', {
        type: 'custom_toast',
        animationDuration: 100,
        data: {type: 'success'}
      });
    } catch (error) {
      setError(error.message);
      toast.show(error.message, {
        type: 'custom_toast',
        animationDuration: 100,
        data: {type: 'fail'}
      });
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
