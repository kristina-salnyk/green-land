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
import { MaterialCommunityIcons } from '@expo/vector-icons';
import api from '../../../../api/api';
import { useUser } from '../../../../contexts/user-context';
import { Loader } from '../../../common/components/loader/loader';
import { useAuthData } from '../../../common/hooks/use-auth-data';
import PropTypes from 'prop-types';

export const LoginForm = ({ navigation }) => {
    const {
        login,
        password,
        isPasswordHidden,
        changeLogin,
        changePassword,
        toggleIsPasswordHidden,
    } = useAuthData();

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { logIn } = useUser();

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

LoginForm.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
        reset: PropTypes.func,
    })
};