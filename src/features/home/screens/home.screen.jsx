import React from 'react';
import { Logo } from '../../common/components/logo/logo';
import { Heading } from '../../common/components/heading/heading.styled';
import { Container } from '../../common/components/container/container.styled';
import { Group } from '../../common/components/button/button.styled';
import { Button } from '../../common/components/button/button';
import PropTypes from 'prop-types';

export const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Heading>Welcome to</Heading>
      <Logo />
      <Group>
        <Button onPress={() => navigation.navigate('Login')} text="Login" />
        <Button
          onPress={() => navigation.navigate('Registration')}
          text="Register"
          color="secondary"
        />
      </Group>
    </Container>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};
