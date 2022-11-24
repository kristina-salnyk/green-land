import React, { useState } from 'react';
import { Field, Icon, Input } from '../../../common/input/input.styled';
import { Button, Group, Text } from '../../../common/button/button.styled';
import { Checkbox } from '../../../common/checkbox/checkbox';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useUser } from '../../../../contexts/user-context';
import api from '../../../../api/api';
import { Loader } from '../../../common/loader/loader';

export const RegisterForm = ({ navigation }) => {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { logIn } = useUser();

  const nameChangeHandler = text => setName(text);
  const loginChangeHandler = text => setLogin(text);
  const passwordChangeHandler = text => setPassword(text);
  const isAdminChangeHandler = () => setIsAdmin(!isAdmin);
  const isPasswordHiddenHandler = () => setIsPasswordHidden(!isPasswordHidden);

  const onSubmit = async () => {
    setIsLoading(true);
    setError(null);

    const user = { name, login, password, isAdmin };

    try {
      const response = await api.post('/users', user);

      const userData = response.data;
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
            placeholder="Name"
            value={name}
            onChangeText={nameChangeHandler}
          ></Input>
        </Field>
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
        <Checkbox
          value={isAdmin}
          onPress={isAdminChangeHandler}
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
