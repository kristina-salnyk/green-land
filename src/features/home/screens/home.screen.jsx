import React from 'react';
import { Logo } from '../../common/logo/logo';
import { Heading } from '../../common/heading/heading.styled';
import { Container } from '../../common/container/container.styled';
import { Group, Button, Text } from '../../common/button/button.styled';

export const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Heading>Welcome to</Heading>
      <Logo />
      <Group>
        <Button onPress={() => navigation.navigate('Login')} color="primary">
          <Text>Login</Text>
        </Button>
        <Button onPress={() => navigation.navigate('Registration')}
          color="secondary">
          <Text>Register</Text>
        </Button>
      </Group>
    </Container>
  );
};