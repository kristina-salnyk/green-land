import React from 'react';
import {
  ScreenContainer,
  Menu,
} from '../../common/components/screen-container/screen-container.styled';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Profile, Avatar, Name } from '../components/profile/profile.styled';
import { Options } from '../components/options/options';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useUser } from '../../../contexts/user-context';

export const ProfileScreen = ({ navigation }) => {
  const { userData, logOut } = useUser();

  return (
    <ScreenContainer>
      <Menu>
        <TouchableOpacity onPress={() => logOut(navigation)}>
          <Ionicons name="exit-outline" size={50} />
        </TouchableOpacity>
      </Menu>
      <Profile>
        <Avatar source={require('../../../../assets/user-icon.png')} />
        <Name>{userData?.name ?? ''}</Name>
      </Profile>
      <Options navigation={navigation}/>
    </ScreenContainer>
  );
};

ProfileScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    reset: PropTypes.func,
  }),
};
