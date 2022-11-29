import { useUser } from '../../../contexts/user-context';
import { ScreenContainer } from '../../common/components/screen-container/screen-container.styled';
import { Avatar, Name, Profile } from '../components/profile/profile.styled';
import React, { useState } from 'react';
import { Menu } from '../../common/components/menu/menu';
import PropTypes from 'prop-types';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native';

export const EditProfileScreen = ({ navigation }) => {
  const { userData, setUserData } = useUser();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.canceled) {
      setUserData(prevState => ({ ...prevState, image: result.assets[0].uri }));
    }
  };

  const imagePath = userData?.image
    ? { uri: userData.image }
    : require('../../../../assets/user-icon.png');

  return (
    <ScreenContainer>
      <Menu navigation={navigation} />
      <Profile>
        <TouchableOpacity onPress={pickImage}>
          <Avatar source={imagePath} />
        </TouchableOpacity>
        <Name>{userData?.name ?? ''}</Name>
      </Profile>
    </ScreenContainer>
  );
};

EditProfileScreen.propTypes = {
  navigation: PropTypes.object,
};
