import React from 'react-native';
import { Avatar, Name } from './profile.styled';
import { useUser } from '../../../../contexts/user-context';

export const Profile = () => {
    const { userName } = useUser();

    return (
        <>
            <Avatar source={require('../../../../../assets/user-icon.png')} />
            <Name>{userName}</Name>
        </>
    );
};
