import {
  FormFields,
  ScreenContainer,
} from '../../common/components/screen-container/screen-container.styled';
import { Avatar } from '../components/profile/profile.styled';
import React, { useEffect } from 'react';
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
} from '../components/profile/edit-profile.styled';
import { Button } from '../../common/components/button/button';
import { Icon } from '../../common/components/button/icon';
import { useProfileData } from '../../common/hooks/use-profile-data';
import { useLoading } from '../../../contexts/loading-context';
import { Loader } from '../../common/components/loader/loader';

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
    updateUserData,
  } = useProfileData();
  const { isLoading, setError } = useLoading();

  useEffect(() => {
    return () => {
      setError(null);
    };
  }, []);

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
    : require('../../../../assets/user-add-icon.png');

  return (
    <ScreenContainer space={Platform.OS === 'ios' ? 5 : 4}>
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
            <Input value={name} onChangeText={changeName} />
            <Icon
              iconName="person"
              size={30}
              iconStyle={{ top: 20, left: 10 }}
            />
          </Field>
          <Field>
            <Label>{PHONE}</Label>
            <Input value={phone} onChangeText={changePhone} />
            <Icon
              iconName="phone"
              size={35}
              iconStyle={{ top: 20, left: 12 }}
            />
          </Field>
          <Field>
            <Label>{EMAIL}</Label>
            <Input
              value={email}
              onChangeText={changeEmail}
              editable={false}
            />
            <Icon iconName="email" iconStyle={{ top: 20, left: 10 }} />
          </Field>
          <Button onPress={updateUserData} color="primary" text="Save" />
        </FormFields>
      </FormContainer>
      <Info>
        By providing your email, you agree to receive updates from {'\n'} the
        <Text style={{ color: 'green' }}> Green Land </Text>App
      </Info>
      {isLoading && <Loader />}
    </ScreenContainer>
  );
};

EditProfileScreen.propTypes = {
  navigation: PropTypes.object,
};
