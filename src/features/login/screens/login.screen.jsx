import React, { useEffect } from 'react';
import {
  FormContainer,
  Heading,
  Title,
} from '../../common/components/screen-container/screen-container.styled';
import { ScreenContainer } from '../../common/components/screen-container/screen-container.styled';
import { Logo } from '../../common/components/logo/logo';
import PropTypes from 'prop-types';
import { AUTH_TYPES } from '../../../constants';
import { AuthForm } from '../../common/components/auth-form/auth-form';
import { Platform } from 'react-native';
import { Loader } from '../../common/components/loader/loader';
import { useLoading } from '../../../contexts/loading-context';

export const LoginScreen = ({ navigation }) => {
  const { isLoading, setError } = useLoading();

  useEffect(() => {
    return () => {
      setError(null);
    };
  }, []);

  return (
    <ScreenContainer>
      <Heading>
        <Title>Log in</Title>
        <Logo />
      </Heading>
      <FormContainer behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <AuthForm navigation={navigation} authType={AUTH_TYPES.LOGIN} />
      </FormContainer>
      {isLoading && <Loader />}
    </ScreenContainer>
  );
};

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};
