import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'styled-components/native';
import { useUser } from '../../contexts/user-context';
import { RegistrationScreen } from '../../features/registration/screens/registration.screen';
import { LoginScreen } from '../../features/login/screens/login.screen';
import { HomeScreen } from '../../features/home/screens/home.screen';
import { ProfileScreen } from '../../features/profile/screens/profile.screen';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

const MainStack = createStackNavigator();

export const Navigation = () => {
    const theme = useTheme();
    const {isLoggedIn} = useUser();

    const screenOptions = {
        headerShown: false,
        contentStyle: { backgroundColor: theme.colors.bg.primary },
    };

    return (
        <NavigationContainer>
            <MainStack.Navigator
                initialRouteName={isLoggedIn ? 'Profile' : 'Home'}
                screenOptions={screenOptions}
            >
                <MainStack.Screen
                    name="Registration"
                    component={RegistrationScreen}
                />
                <MainStack.Screen name="Login" component={LoginScreen} />
                <MainStack.Screen name="Home" component={HomeScreen} />
                <MainStack.Screen name="Profile" component={ProfileScreen} />
            </MainStack.Navigator>
        </NavigationContainer>
    );
};