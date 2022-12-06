import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeExtension } from './src/infrastructure/theme-extension/theme-extension';
import { UserProvider } from './src/contexts/user-context';
import { CompaniesContextProvider } from './src/services/companies/companies.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { Navigation } from './src/infrastructure/navigation/navigation';
import { LoadingProvider } from './src/contexts/loading-context';
import { ToastExtension } from './src/infrastructure/toast-extention/toast-extention';

export default function App() {
  return (
    <>
      <ThemeExtension>
        <UserProvider>
          <ToastExtension>
            <LoadingProvider>
              <LocationContextProvider>
                <CompaniesContextProvider>
                  <Navigation />
                </CompaniesContextProvider>
              </LocationContextProvider>
            </LoadingProvider>
          </ToastExtension>
        </UserProvider>
      </ThemeExtension>
      <ExpoStatusBar style="auto" />
    </>
  );
}
