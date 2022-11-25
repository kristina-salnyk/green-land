import React from 'react';
import { Container } from '../../common/components/container/container.styled';
import { Text } from '../../common/components/link/link.styled';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Profile } from '../components/avatar/profile';

export const ProfileScreen = ({ navigation }) => {
    return (
        <Container>
            <Profile />
            <TouchableOpacity
                onPress={() => navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }],
                })}
            ><Text>Log out</Text></TouchableOpacity>
        </Container>

    );
};

ProfileScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
        reset: PropTypes.func
    })
};
