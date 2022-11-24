import React from 'react-native';
import { ActivityIndicator } from 'react-native';
import {Loader as LoaderStyled} from './loader.styled';

export const Loader = () => {
    return (
        <LoaderStyled>
            <ActivityIndicator size="large" />
        </LoaderStyled>
    );
};
