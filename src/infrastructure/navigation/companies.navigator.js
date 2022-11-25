import React from "react";


import {createStackNavigator, TransitionPresets} from "@react-navigation/stack"

import { CompaniesScreen } from "../../features/categories/screens/companies.screen";
import {CompanyDetailScreen} from "../../features/categories/screens/companies-detail.screen"
const CompanyStack = createStackNavigator();

export const CompaniesNavigator = () => {
    return (
        <CompanyStack.Navigator headerMode='none'
        screenOptions={{
            ...TransitionPresets.ModalPresentationIOS
        }}>
              <CompanyStack.Screen
                      name="Companies"
                      component={CompaniesScreen } 
              />
                     <CompanyStack.Screen
                      name="CompanyDetailt"
                      component={ CompanyDetailScreen } 
              />
            
        </CompanyStack.Navigator>
    )
}