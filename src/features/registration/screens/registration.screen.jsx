import React from 'react';
import { Heading } from '../../common/components/heading/heading.styled';
import { Container } from '../../common/components/container/container.styled';
import { Logo } from '../../common/components/logo/logo';
import { RegisterForm } from '../components/register-form/register-form';

export const RegistrationScreen = ({navigation}) => {
  return (
    <Container style={{position: 'relative'}}>
      <Heading>Registration</Heading>
      <Logo />
      <RegisterForm navigation={navigation}/>
    </Container>
  );
};