import React, {View } from 'react-native';
import { Text, Img } from './logo.styled';

export const Logo = () => {
  return (
    <View>
      <Img source={require('../../../../assets/logo.png')} />
      <Text>Green Land</Text>
    </View>
  );
};