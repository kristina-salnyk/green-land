import React from 'react';
import { Field, Icon, Input } from '../input/input.styled';
import { Button } from '../button/button';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useUser } from '../../../../contexts/user-context';
import { useAuthData } from '../../hooks/use-auth-data';
import PropTypes from 'prop-types';
import { AUTH_TYPES, ROLES, ROUTES } from '../../../../constants';
import { authRegister } from '../../../../api/auth-register';
import { Checkbox } from '../checkbox/checkbox';
import { FormFields } from '../screen-container/screen-container.styled';
import { useLoading } from '../../../../contexts/loading-context';
import { ValidationSchema } from '../../../../utils/validation';
import * as Yup from 'yup';
import { useToast } from 'react-native-toast-notifications';

const NAME = 'Name';
const EMAIL = 'E-mail';
const PASSWORD = 'Password';
const IS_COMPANY = 'For companies';

export const AuthForm = ({ navigation, authType }) => {
  const {
    name,
    email,
    password,
    role,
    isPasswordHidden,
    changeName,
    changeEmail,
    changePassword,
    changeRole,
    toggleIsPasswordHidden,
  } = useAuthData();

  const { logIn } = useUser();
  const { setIsLoading, setError } = useLoading();
  const toast = useToast();

  const onSubmit = async () => {
    try {
      switch (authType) {
        case AUTH_TYPES.LOGIN:
          await Yup.object({
            email: ValidationSchema.email,
            password: ValidationSchema.password,
          }).validate({
            email,
            password,
          });
          break;
        case AUTH_TYPES.REGISTRATION:
          await Yup.object({
            name: ValidationSchema.name,
            email: ValidationSchema.email,
            password: ValidationSchema.password,
          }).validate({ name, email, password });
          break;
        default:
          return;
      }
    } catch (error) {
      toast.show(error.message, {
        type: 'custom_toast',
        animationDuration: 100,
        data: { type: 'fail' },
      });
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      if (authType === AUTH_TYPES.REGISTRATION) {
        await authRegister({
          firstName: name,
          lastName: name,
          email,
          password,
          confirmPassword: password,
          role,
        });
      }

      await logIn({ email, password });
      navigation.reset({
        index: 0,
        routes: [{ name: ROUTES.PROFILE }],
      });
    } catch (error) {
      setError(error.message);
      toast.show(error.message, {
        type: 'custom_toast',
        animationDuration: 100,
        data: { type: 'fail' },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <FormFields>
        {authType === AUTH_TYPES.REGISTRATION && (
          <Field>
            <Input placeholder={NAME} value={name} onChangeText={changeName} />
          </Field>
        )}
        <Field>
          <Input placeholder={EMAIL} value={email} onChangeText={changeEmail} />
        </Field>
        <Field>
          <Input
            placeholder={PASSWORD}
            value={password}
            secureTextEntry={isPasswordHidden}
            onChangeText={changePassword}
          />
          <Icon onPress={toggleIsPasswordHidden}>
            <MaterialCommunityIcons
              name={isPasswordHidden ? 'eye' : 'eye-off'}
              size={22}
            />
          </Icon>
        </Field>
        {authType === AUTH_TYPES.REGISTRATION && (
          <Checkbox
            isChecked={role === ROLES.COMPANY}
            onPress={changeRole}
            text={IS_COMPANY}
          />
        )}
        <Button onPress={onSubmit} color="primary" text="Submit" />
      </FormFields>
    </>
  );
};

AuthForm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    reset: PropTypes.func,
  }),
  authType: PropTypes.string.isRequired,
};
