import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import {theme} from "./src/infrastructure/theme";
import { CompaniesScreen } from "./src/features/categories/screens/companies.screen";




export default function App() {
  return (
    <>
    <ThemeProvider theme = {theme}>
   <CompaniesScreen />
   </ThemeProvider>
    <ExpoStatusBar style='auto'/>
    </>
  );
}