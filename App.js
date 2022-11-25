import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native-paper';
import { ThemeProvider } from 'styled-components/native';
import {theme} from "./src/infrastructure/theme";
import { CompaniesScreen } from "./src/features/categories/screens/companies.screen";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SafeArea } from './src/components/utility/safe-area.component';


import {companiesRequest} from "./src/services/companies/companies.service"

import { CompaniesContextProvider } from './src/services/companies/companies.context';
import { LocationContextProvider } from './src/services/location/location.context';

import { Navigation } from './src/infrastructure/navigation';


const Tab = createBottomTabNavigator();

const Map = ()=> <SafeArea><Text>Map</Text></SafeArea>

export default function App() {
  return (
    <>
    <ThemeProvider theme = {theme}>
      <LocationContextProvider>
      <CompaniesContextProvider>
    {/* <NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen name="Companys" component={CompaniesScreen} />
      <Tab.Screen name="Map" component={Map} />
    </Tab.Navigator>
   </NavigationContainer> */}
   <Navigation/>
   </CompaniesContextProvider>
   </LocationContextProvider>
   </ThemeProvider>
    <ExpoStatusBar style='auto'/>
    </>
  );
}