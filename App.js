import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeExtension } from './src/infrastructure/theme-extension/theme-extension';
import { UserProvider } from './src/contexts/user-context';
import { CompaniesContextProvider } from './src/services/companies/companies.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { Navigation } from './src/infrastructure/navigation/navigation';

// const Tab = createBottomTabNavigator();
// const Map = ()=> <SafeArea><Text>Map</Text></SafeArea>

export default function App() {
    return (
        <>
            <ThemeExtension>
                <UserProvider>
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
                </UserProvider>
            </ThemeExtension>
          <ExpoStatusBar style='auto'/>
        </>
    );
}
