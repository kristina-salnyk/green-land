import { ScreenContainer } from '../../common/components/screen-container/screen-container.styled';
import { Avatar, Name, Profile } from '../components/profile/profile.styled';
import React from 'react';
import { Menu } from '../../common/components/menu/menu';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import { CompanyOptions } from '../components/options/company-options';
import { useCompany } from '../../../contexts/company-context';

export const CompanyProfileScreen = ({ navigation }) => {
  const { companyData } = useCompany();

  return (
    <ScreenContainer space={Platform.OS === 'ios' ? 5 : 4}>
      <Menu navigation={navigation} />
      <Profile>
        <Avatar source={require('../../../../assets/company-default.png')} />
        <Name>{companyData?.name ?? ''}</Name>
      </Profile>
      <CompanyOptions navigation={navigation} />
    </ScreenContainer>
  );
};

CompanyProfileScreen.propTypes = {
  navigation: PropTypes.object,
};
