import React, { useState } from 'react';
import { Field, Icon, Input } from '../../../common/input/input.styled';
import { Button, Group, Text } from '../../../common/button/button.styled';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import api from '../../../../api/api';
import { useUser } from '../../../../contexts/user-context';
import { Loader } from '../../../common/loader/loader';

export const LoginForm = ({ navigation }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { logIn } = useUser();

  const loginChangeHandler = text => setLogin(text);
  const passwordChangeHandler = text => setPassword(text);
  const isPasswordHiddenHandler = () => setIsPasswordHidden(!isPasswordHidden);

  const onSubmit = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await api.get(`/users?login=${login}`);

      if (response.data.length === 0) {
        throw new Error('User not registered');
      }

      const userData = response.data[0];
      if (userData.password !== password) {
        throw new Error('Incorrect password');
      }

      logIn(userData.name);

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
            placeholder="E-mail or phone number"
            value={login}
            onChangeText={loginChangeHandler}
          ></Input>
        </Field>
        <Field>
          <Input
            placeholder="Password"
            value={password}
            secureTextEntry={isPasswordHidden}
            onChangeText={passwordChangeHandler}
          />
          <Icon onPress={isPasswordHiddenHandler}>
            <MaterialCommunityIcons
              name={isPasswordHidden ? 'eye' : 'eye-off'}
              size={22}
            />
          </Icon>
        </Field>
        <Button color="primary" onPress={onSubmit}>
          <Text>Submit</Text>
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
