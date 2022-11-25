import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {CompaniesNavigator} from './companies.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';
const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Companys" component={CompaniesNavigator} />
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);