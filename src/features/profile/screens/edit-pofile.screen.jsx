import { useUser } from '../../../contexts/user-context';
import {
  FormFields,
  ScreenContainer,
} from '../../common/components/screen-container/screen-container.styled';
import { Avatar } from '../components/profile/profile.styled';
import React from 'react';
import { Menu } from '../../common/components/menu/menu';
import PropTypes from 'prop-types';
import * as ImagePicker from 'expo-image-picker';
import { Platform, Text, TouchableOpacity } from 'react-native';
import { FormContainer, Field, Info, Input } from '../components/edit-profile.styled';
import { Button } from '../../common/components/button/button';

const NAME = 'Name';
const PHONE = 'Phone number';
const EMAIL = 'E-mail';

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
      <TouchableOpacity
        style={{ alignSelf: 'center', flex: 1 }}
        onPress={pickImage}
      >
        <Avatar source={imagePath} />
      </TouchableOpacity>
      <FormContainer behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <FormFields>
          <Field>
            <Text>{NAME}</Text>
            <Input
              value={userData?.name}
              onChangeText={text => setUserData({ ...userData, name: text })}
            />
          </Field>
          <Field>
            <Text>{PHONE}</Text>
            <Input
              value={userData?.phone}
              onChangeText={text => setUserData({ ...userData, phone: text })}
            />
          </Field>
          <Field>
            <Text>{EMAIL}</Text>
            <Input
              value={userData?.email}
              onChangeText={text => setUserData({ ...userData, emil: text })}
            />
          </Field>
          <Button onPress={()=>{}} color="primary" text="Save" />
        </FormFields>
      </FormContainer>
      <Info>
        By providing your email, you agree to receive updates from {'\n'} the
        <Text style={{ color: 'green' }}> Green Land </Text>App
      </Info>
    </ScreenContainer>
  );
};

EditProfileScreen.propTypes = {
  navigation: PropTypes.object,
};
