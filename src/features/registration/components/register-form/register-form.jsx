import React, { useState } from 'react';
import {
  Field,
  Icon,
  Input,
} from '../../../common/components/input/input.styled';
import {
  Button,
  Group,
  Text,
} from '../../../common/components/button/button.styled';
import { Checkbox } from '../../../common/components/checkbox/checkbox';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useUser } from '../../../../contexts/user-context';
import api from '../../../../api/api';
import { Loader } from '../../../common/components/loader/loader';
import { useAuthData } from '../../../common/hooks/use-auth-data';
import PropTypes from 'prop-types';
import { USER_TYPES } from '../../../../constants';

export const RegisterForm = ({ navigation }) => {
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

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { logIn } = useUser();

  const onSubmit = async () => {
    setIsLoading(true);
    setError(null);

    const user = { name, login, password, isAdmin };

    try {
      const response = await api.post('/users', user);

      const userData = response.data;
      const params = {name: userData.name,
        type: userData.isAdmin ? USER_TYPES.ADMIN : USER_TYPES.USER};
      logIn(params);

      navigation.reset({
        index: 0,
        routes: [{ name: 'Profile' }],
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <Group>
        <Field>
          <Input
            placeholder="Name"
            value={name}
            onChangeText={changeName}
          ></Input>
        </Field>
        <Field>
          <Input
            placeholder="E-mail or phone number"
            value={login}
            onChangeText={changeLogin}
          ></Input>
        </Field>
        <Field>
          <Input
            placeholder="Password"
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
        <Checkbox
          isChecked={isAdmin}
          onPress={changeIsAdmin}
          text="I am an administrator"
        />
        <Button color="primary" onPress={onSubmit}>
          <Text>Register</Text>
        </Button>

        {/*TODO: error message*/}
        {error && (
          <Text style={{ color: 'red', marginTop: 30 }}>
            Something went wrong :( {error}
          </Text>
        )}
      </Group>
    </>
  );
};

RegisterForm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    reset: PropTypes.func
  })
};