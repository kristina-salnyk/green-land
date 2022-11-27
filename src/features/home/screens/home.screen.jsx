import React from 'react';
import { Logo } from '../../common/components/logo/logo';
import { Heading } from '../../common/components/screen-container/screen-container.styled';
import { ScreenContainer } from '../../common/components/screen-container/screen-container.styled';
import { Button, Text } from '../../common/components/button/button.styled';
import PropTypes from 'prop-types';
import { ROUTES } from '../../../constants';
import { Title } from '../../common/components/screen-container/screen-container.styled';
import { View } from 'react-native';

export const HomeScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Heading>
        <Title>Welcome to</Title>
        <Logo />
      </Heading>
      <View style={{ flex: 1 }}>
        <Button
          onPress={() => navigation.navigate(ROUTES.LOGIN)}
          color="primary"
        >
          <Text>Login</Text>
        </Button>
        <Button
          onPress={() => navigation.navigate(ROUTES.REGISTER)}
          color="secondary"
        >
          <Text>Register</Text>
        </Button>
      </View>
    </ScreenContainer>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};
