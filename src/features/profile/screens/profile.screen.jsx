import React from 'react';
import { Heading } from '../../common/heading/heading.styled';
import { Container } from '../../common/container/container.styled';
import { useUser } from '../../../contexts/user-context';
import { Text } from '../../common/link/link.styled';
import { TouchableOpacity } from 'react-native';

export const ProfileScreen = ({ navigation }) => {
  const {userName} = useUser();

  return (
    <Container>
      <Heading style={{flex: 1}}>Hello, {userName}!</Heading>

      <TouchableOpacity
        onPress={() => navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        })}
      ><Text>Log out</Text></TouchableOpacity>
    </Container>

  );
};