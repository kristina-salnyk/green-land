import React from 'react';
import { View } from 'react-native-paper';
import { ScreenContainer } from '../common/components/screen-container/screen-container.styled';
import { SearchHeading } from '../common/components/screen-container/screen-container.styled';
import { Title } from '../common/components/screen-container/screen-container.styled';
import { SearchButton } from '../common/components/button/button';

export const SearchOptions = ({ navigation }) => {
  return (
    <ScreenContainer>
      <SearchHeading>
        <Title>Find by:</Title>
      </SearchHeading>
      <SearchButton
        onPress={() => {
          navigation.navigate('CategoriesPage', {
            screen: 'CategoriesPage',
          });
        }}
        text="The names of items"
        iconName="shopping-bag"
        iconStyle={{ top: 30 }}
      />
      <SearchButton
        onPress={() => {
          navigation.navigate('NavigationBar', {
            screen: 'CategoriesPage',
          });
        }}
        text="The location"
        iconName="map-marker"
        iconStyle={{ top: 30 }}
      />
    </ScreenContainer>
  );
};
