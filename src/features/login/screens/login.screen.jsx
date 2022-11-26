import React from 'react';
import { Heading } from '../../common/components/heading/heading.styled';
import { Container } from '../../common/components/container/container.styled';
import { Logo } from '../../common/components/logo/logo';
import PropTypes from 'prop-types';
import { AUTH_TYPES } from '../../../constants';
import { AuthForm } from '../../common/components/auth-form/auth-form';

export const LoginScreen = ({navigation}) => {
  return (
    <Container>
      <Heading>Log in</Heading>
      <Logo />
      <AuthForm navigation={navigation} authType={AUTH_TYPES.LOGIN}/>
    </Container>
  );
};

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
};