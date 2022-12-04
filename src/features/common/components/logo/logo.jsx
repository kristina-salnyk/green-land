import React, { View } from 'react-native';
import { Text, Img } from './logo.styled';

export const Logo = () => {
  return (
    <View style={{width: '100%', alignItems: 'center'}}>
      <Img source={require('../../../../../assets/logo.png')} />
      <Text style={{width: '100%'}}>Green Land</Text>
    </View>
  );
};
