import React from 'react';
import { CATEGORIES } from '../../../data/category-data';
import { FlatList } from 'react-native';
import { SafeArea } from '../../../components/utility/safe-area.component';
import CategoriesInfoCard from '../components/categories-info-card';
import { StyleSheet, Text } from 'react-native';

export function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('CategoryOptionsOverview', {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoriesInfoCard
        title={itemData.item.title}
        img={itemData.item.img}
        onPress={pressHandler}
        id={itemData.item.id}
      />
    );
  }

  return (
    <SafeArea>
      <Text style={styles.header}>Choose the best option</Text>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  header: {
    fle: 1,
    fontSize: 32,
    fontWeight: 'bold',
    padding: 10,
  },
});
