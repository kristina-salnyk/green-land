import {
  ScreenContainer,
} from '../../common/components/screen-container/screen-container.styled';
import { Avatar, Name, Profile } from '../components/profile/profile.styled';
import React from 'react';
import { Menu } from '../../common/components/menu/menu';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import { useUser } from '../../../contexts/user-context';
import { CompanyOptions } from '../components/options/company-options';

export const EditCompanyProfileScreen = ({ navigation }) => {
  const { userData } = useUser();

  return (
    <ScreenContainer space={Platform.OS === 'ios' ? 5 : 4}>
      <Menu navigation={navigation} />
      <Profile>
        <Avatar source={require('../../../../assets/company-default.png')} />
        <Name>{userData.company ?? ''}</Name>
      </Profile>
      <CompanyOptions navigation={navigation} />
    </ScreenContainer>
  );
};

EditCompanyProfileScreen.propTypes = {
  navigation: PropTypes.object,
};
