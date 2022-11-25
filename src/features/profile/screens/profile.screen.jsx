import React from 'react';
import { Container } from '../../common/components/container/container.styled';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { Profile } from '../components/avatar/profile';
import { Options } from '../components/options/options';
import Ionicons
  from 'react-native-vector-icons/Ionicons';

export const ProfileScreen = ({ navigation }) => {
  return (
    <Container>
      <View style={{position: 'relative', marginLeft: 'auto'}}>
        <TouchableOpacity
          style={{position: 'absolute', right: 0, top: -24}}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'Home' }],
            })
          }
        >
          <Ionicons
            name='exit-outline' size={50}/>
        </TouchableOpacity>
      </View>
      <Profile />
      <Options/>
    </Container>
  );
};

ProfileScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    reset: PropTypes.func,
  }),
};
