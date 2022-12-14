import React, { FlatList } from 'react-native';
import CompanyItem from './CompanyItem';

function renderCompanyItem(itemData) {
  return <CompanyItem {...itemData.item} />;
}

function CompaniesList({ companies }) {
  return (
    <FlatList
      data={companies}
      renderItem={renderCompanyItem}
      keyExtractor={item => item.id}
    />
  );
}

export default CompaniesList;
