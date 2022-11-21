import React from "react";
import styled from 'styled-components/native'
import { StatusBar, StyleSheet, SafeAreaView, Text, View, Platform } from 'react-native';
import { CompaniesInfoCard } from "../components/companies-info-card";


const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const CompanyListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const CompaniesScreen = () => (
    <SafeArea >
    <SearchContainer >
      <Text>Header</Text>
    </SearchContainer>
    <CompanyListContainer >
      <CompaniesInfoCard/>
    </CompanyListContainer>
    </SafeArea>
);

