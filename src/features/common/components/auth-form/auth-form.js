import React from 'react';
import { Field, Icon, Input } from '../input/input.styled';
import { Button, Text } from '../button/button.styled';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useUser } from '../../../../contexts/user-context';
import { useAuthData } from '../../hooks/use-auth-data';
import PropTypes from 'prop-types';
import { authLogin } from '../../../../api/auth-login';
import { AUTH_TYPES } from '../../../../constants';
import { authRegister } from '../../../../api/auth-register';
import { Checkbox } from '../checkbox/checkbox';
import { FormFields } from '../screen-container/screen-container.styled';
import { useLoading } from '../../../../contexts/loading';

const NAME = 'Name';
const LOGIN = 'E-mail or phone number';
const PASSWORD = 'Password';
const IS_ADMIN = 'I am an administrator';

export const AuthForm = ({ navigation, authType }) => {
  const {
    name,
    login,
    password,
    isAdmin,
    isPasswordHidden,
    changeName,
    changeLogin,
    changePassword,
    changeIsAdmin,
    toggleIsPasswordHidden,
  } = useAuthData();

  const { logIn } = useUser();
  const { error, setIsLoading, setError } = useLoading();

  const onSubmit = async () => {
    setIsLoading(true);
    setError(null);

    try {
      let userData = null;
      switch (authType) {
        case AUTH_TYPES.LOGIN:
          userData = await authLogin({ login, password });
          break;
        case AUTH_TYPES.REGISTRATION:
          userData = await authRegister({ name, login, password, isAdmin });
          break;
        default:
          return;
      }
      logIn(userData, navigation);
    } catch (error) {
      setError(error.message);
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
          <Input placeholder={LOGIN} value={login} onChangeText={changeLogin} />
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
            isChecked={isAdmin}
            onPress={changeIsAdmin}
            text={IS_ADMIN}
          />
        )}
        <Button color="primary" onPress={onSubmit}>
          <Text>Submit</Text>
        </Button>

        {/*TODO: error message*/}
        {error && (
          <Text style={{ color: 'red', marginTop: 30 }}>
            Something went wrong :( {error}
          </Text>
        )}
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
