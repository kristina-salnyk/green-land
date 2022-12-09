import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'styled-components/native';
import { useUser } from '../../contexts/user-context';
import { RegistrationScreen } from '../../features/registration/screens/registration.screen';
import { LoginScreen } from '../../features/login/screens/login.screen';
import { HomeScreen } from '../../features/home/screens/home.screen';
import { ProfileScreen } from '../../features/profile/screens/profile.screen';
import { SearchOptions } from '../../features/search-options/search-options';
import { CategoriesScreen } from '../../features/categories-search/screens/categories.screen';
import { CompaniesScreen } from '../../features/categories/screens/companies.screen';
import { CompanyDetailScreen } from '../../features/categories/screens/companies-detail.screen';
import { NavigationBar } from './index';

import AllCompanies from '../../admin/AllCompanies';
import ManageCompany from '../../admin/ManageCompany';
import CategoryOptionsOverview from '../../features/categories-search/screens/category-options.screen';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { ROUTES } from '../../constants';
import { EditProfileScreen } from '../../features/profile/screens/edit-pofile.screen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconButton from '../../admin/components/UI/IconButton';
import CompaniesContextEditProvider from '../../admin/store/companies-context';
import Map from '../../admin/screens/Map';
import AddPlace from '../../admin/screens/AddPlace';
import LocationPicker from '../../admin/components/Location/LocationPicker';
import { CompanyProfileScreen } from '../../features/profile/screens/company-profile.screen';
import { FaqScreen } from '../../features/profile/screens/faq.screen';
import { EditCompanyScreen } from '../../features/company/screens/edit-company.screen';
const MainStack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

function CompaniesOverview(){
  return (
  <BottomTabs.Navigator 
  screenOptions={({navigation})=>({
    headerStyle:{backgroundColor: 'green'},
    headerTintColor: 'white',
    
    headerRight: () =>(
      <IconButton 
      icon="add" 
      size={24} 
      color='red' 
      onPress={()=>{
        navigation.navigate('ManageCompany', {

      })
      }}/>
    )
    
  })}>
    
    <BottomTabs.Screen name="AllCompanies" component={AllCompanies} options={{
      title: 'All Companies',
      tabBarLabel: 'All',
      tabBarIcon: ({color, size})=> (
      <Ionicons name='hourglass'/>
      ),
    }}
    />

    
  </BottomTabs.Navigator>
  )
}


export const Navigation = () => {
  const theme = useTheme();
  const { isLoading, isLoggedIn } = useUser();

  const screenOptions = {
    // headerShown: false,
    cardStyle: { backgroundColor: theme.colors.bg.secondary },
  };

  return (
    <>
      {!isLoading ? (
        <CompaniesContextEditProvider>
        <NavigationContainer>
          <MainStack.Navigator
            initialRouteName={isLoggedIn ? ROUTES.PROFILE : ROUTES.HOME}
            screenOptions={screenOptions}
          >
            <MainStack.Screen
              name={ROUTES.REGISTER}
              component={RegistrationScreen}
            />
            <MainStack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
            <MainStack.Screen name={ROUTES.HOME} component={HomeScreen} />
            <MainStack.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
            <MainStack.Screen name="SearchOptions" component={SearchOptions} />
            <MainStack.Screen name="CategoriesPage" component={CategoriesScreen} />
            <MainStack.Screen name="CategoryOptionsOverview" component={CategoryOptionsOverview} />
            <MainStack.Screen name="CompaniesScreen" component={CompaniesScreen} />
            <MainStack.Screen name="CompanyDetailScreen" component={CompanyDetailScreen} />
            <MainStack.Screen name="NavigationBar" component={NavigationBar} />
            <MainStack.Screen name="CompaniesOverview" component={CompaniesOverview} options={{headerShown: false}} />
            <MainStack.Screen name="ManageCompany" component={ManageCompany} />
            <MainStack.Screen name="Map" component={Map} />
            <MainStack.Screen name="AddPlace" component={AddPlace} />
            <MainStack.Screen name="LocationPicker" component={LocationPicker} />

            <MainStack.Screen
              name={ROUTES.EDIT_PROFILE}
              component={EditProfileScreen}
            />
            <MainStack.Screen
              name={ROUTES.COMPANY_PROFILE}
              component={CompanyProfileScreen}
            />
            <MainStack.Screen name={ROUTES.EDIT_COMPANY} component={EditCompanyScreen}/>
            <MainStack.Screen name={ROUTES.FAQ} component={FaqScreen} />

          </MainStack.Navigator>
        </NavigationContainer>
        </CompaniesContextEditProvider>
      ) : null}
    </>
  );
};
