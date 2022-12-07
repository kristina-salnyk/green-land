import {
  Heading,
  ScreenContainer,
} from '../../common/components/screen-container/screen-container.styled';
import React from 'react';
import { Menu } from '../../common/components/menu/menu';
import PropTypes from 'prop-types';
import { Platform, View } from 'react-native';
import { Title, Info, SubTitle } from '../components/profile/faq.styled';

export const FaqScreen = ({ navigation }) => {
  return (
    <ScreenContainer space={Platform.OS === 'ios' ? 5 : 4}>
      <Menu navigation={navigation} />
      <Heading>
        <Title>Green Land FAQ</Title>
      </Heading>
      <View style={{flex: 5, paddingHorizontal: 10}}>
        <SubTitle>Green Land is a waste management App</SubTitle>
        <Info>
          Waste and recycling App can be a great tool for communicating with,
          educating, and even entertaining your customers or other constituents.
          But they are only successful when they are easy to use and offer
          helpful information to users. Our App is a non-profit network
          comprised of the Government for the private and public sector
          companies, that are active and interested in environmental issues
          related to the management and reduction of waste to conserving and
          maintaining healthy oceans, coastlines, lands and the atmosphere for
          both people and nature.
        </Info>
      </View>
    </ScreenContainer>
  );
};

FaqScreen.propTypes = {
  navigation: PropTypes.object,
};
