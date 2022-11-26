import React from 'react';
import { Heading } from '../../common/components/heading/heading.styled';
import { Container } from '../../common/components/container/container.styled';
import { Logo } from '../../common/components/logo/logo';
import PropTypes from 'prop-types';
import { AuthForm } from '../../common/components/auth-form/auth-form';
import { AUTH_TYPES } from '../../../constants';

export const RegistrationScreen = ({ navigation }) => {
  return (
    <Container style={{ position: 'relative' }}>
      <Heading>Registration</Heading>
      <Logo />
      <AuthForm navigation={navigation} authType={AUTH_TYPES.REGISTRATION}/>
    </Container>
  );
};

RegistrationScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};
