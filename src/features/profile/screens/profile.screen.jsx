import React from 'react';
import { ScreenContainer } from '../../common/components/screen-container/screen-container.styled';
import { Platform, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { Profile, Avatar, Name } from '../components/profile/profile.styled';
import { Options } from '../components/options/options';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useUser } from '../../../contexts/user-context';

export const ProfileScreen = ({ navigation }) => {
  const { userData, logOut } = useUser();

  const imagePath = userData?.image
    ? { uri: userData?.image }
    : require('../../../../assets/user-default.png');

  return (
    <ScreenContainer space={(Platform.OS === 'ios') ? 5 : 4}>
      <View style={{ marginLeft: 'auto', marginBottom: 5 }}>
        <TouchableOpacity onPress={() => logOut(navigation)}>
          <Ionicons name="exit-outline" size={50} />
        </TouchableOpacity>
      </View>
      <Profile>
        <Avatar source={imagePath} />
        <Name>{userData?.name ?? ''}</Name>
      </Profile>
      <Options navigation={navigation} />
    </ScreenContainer>
  );
};

ProfileScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    reset: PropTypes.func,
  }),
};
