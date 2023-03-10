import React from 'react';
import { Logo } from '../../common/components/logo/logo';
import { Heading } from '../../common/components/screen-container/screen-container.styled';
import { ScreenContainer } from '../../common/components/screen-container/screen-container.styled';
import { Button } from '../../common/components/button/button';
import PropTypes from 'prop-types';
import { ROUTES } from '../../../constants';
import { Title } from '../../common/components/screen-container/screen-container.styled';
import { Platform, View } from 'react-native';

export const HomeScreen = ({ navigation }) => {
  return (
    <ScreenContainer space={(Platform.OS === 'ios') ? 5 : 4}>
      <Heading>
        <Title>Welcome to</Title>
        <Logo />
      </Heading>
      <View style={{flex: 1}}>
        <Button
          onPress={() => navigation.navigate(ROUTES.LOGIN)}
          text="Login"
        />
        <Button
          onPress={() => navigation.navigate(ROUTES.REGISTER)}
          color="secondary"
          text="Register"
        />
      </View>
    </ScreenContainer>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};
