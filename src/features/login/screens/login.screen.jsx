import React from 'react';
import { Heading } from '../../common/heading/heading.styled';
import { Container } from '../../common/container/container.styled';
import { Logo } from '../../common/logo/logo';
import { LoginForm } from '../components/login-form/login-form';

export const LoginScreen = ({navigation}) => {
  return (
    <Container>
      <Heading>Log in</Heading>
      <Logo />
      <LoginForm navigation={navigation}/>
    </Container>
  );
};