import React from 'react';
import {
  FormContainer,
  Heading,
} from '../../common/components/screen-container/screen-container.styled';
import {
  ScreenContainer,
  Title,
} from '../../common/components/screen-container/screen-container.styled';
import { Logo } from '../../common/components/logo/logo';
import PropTypes from 'prop-types';
import { AuthForm } from '../../common/components/auth-form/auth-form';
import { AUTH_TYPES } from '../../../constants';
import { Platform } from 'react-native';
import { Loader } from '../../common/components/loader/loader';
import { useLoading } from '../../../contexts/loading';

export const RegistrationScreen = ({ navigation }) => {
  const { isLoading } = useLoading();
    
  return (
    <ScreenContainer>
      <Heading>
        <Title>Registration </Title>
        <Logo />
      </Heading>
      <FormContainer behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <AuthForm navigation={navigation} authType={AUTH_TYPES.REGISTRATION} />
      </FormContainer>
      {isLoading && <Loader />}
    </ScreenContainer>
  );
};

RegistrationScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};
