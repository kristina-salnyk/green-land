import React from 'react';
import { Heading } from '../../common/components/heading/heading.styled';
import { Container } from '../../common/components/container/container.styled';
import { useUser } from '../../../contexts/user-context';
import { Text } from '../../common/components/link/link.styled';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

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

ProfileScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
        reset: PropTypes.func
    })
};
