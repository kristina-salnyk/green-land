import React from 'react';
import { Heading } from '../../common/components/heading/heading.styled';
import { Container } from '../../common/components/container/container.styled';
import { Logo } from '../../common/components/logo/logo';
import { LoginForm } from '../components/login-form/login-form';
import PropTypes from 'prop-types';

export const LoginScreen = ({navigation}) => {
  return (
    <Container>
      <Heading>Log in</Heading>
      <Logo />
      <LoginForm navigation={navigation}/>
    </Container>
  );
};

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
};