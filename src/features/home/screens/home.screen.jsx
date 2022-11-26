import React from 'react';
import { Logo } from '../../common/components/logo/logo';
import { Heading } from '../../common/components/heading/heading.styled';
import { Container } from '../../common/components/container/container.styled';
import { Group, Button, Text } from '../../common/components/button/button.styled';
import PropTypes from 'prop-types';
import { ROUTES } from '../../../constants';

export const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Heading>Welcome to</Heading>
      <Logo />
      <Group>
        <Button onPress={() => navigation.navigate(ROUTES.LOGIN)} color="primary">
          <Text>Login</Text>
        </Button>
        <Button onPress={() => navigation.navigate(ROUTES.REGISTER)}
          color="secondary">
          <Text>Register</Text>
        </Button>
      </Group>
    </Container>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  })
};