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
import {
  FormContainer,
  Field,
  Info,
  Input,
  Label,
} from '../components/edit-profile.styled';
import { Button } from '../../common/components/button/button';
import { Icon } from '../../common/components/button/icon';
import { useProfileData } from '../../common/hooks/use-profile-data';

const NAME = 'Name';
const PHONE = 'Phone number';
const EMAIL = 'E-mail';

export const EditProfileScreen = ({ navigation }) => {
  const {
    name,
    phone,
    email,
    image,
    changeName,
    changePhone,
    changeEmail,
    changeImage,
    updateUserData
  } = useProfileData();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.canceled) {
      changeImage(result.assets[0].uri);
    }
  };

  const imagePath = image
    ? { uri: image }
    : require('../../../../assets/user-icon.png');

  return (
    <ScreenContainer space={(Platform.OS === 'ios') ? 5 : 4}>
      <Menu navigation={navigation} />
      <TouchableOpacity
        style={{ alignSelf: 'center', flex: 2, paddingTop: 20 }}
        onPress={pickImage}
      >
        <Avatar source={imagePath} />
      </TouchableOpacity>
      <FormContainer behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <FormFields>
          <Field>
            <Label>{NAME}</Label>
            <Input value={name} onChangeText={text => changeName(text)} />
            <Icon
              iconName="person"
              size={30}
              iconStyle={{ top: 20, left: 10 }}
            />
          </Field>
          <Field>
            <Label>{PHONE}</Label>
            <Input value={phone} onChangeText={text => changePhone(text)} />
            <Icon
              iconName="phone"
              size={35}
              iconStyle={{ top: 20, left: 12 }}
            />
          </Field>
          <Field>
            <Label>{EMAIL}</Label>
            <Input value={email} onChangeText={text => changeEmail(text)} />
            <Icon iconName="email" iconStyle={{ top: 20, left: 10 }} />
          </Field>
          <Button onPress={updateUserData} color="primary" text="Save" />
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
