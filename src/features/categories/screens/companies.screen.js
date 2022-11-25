import React, {useContext} from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { CompaniesInfoCard } from '../components/companies-info-card';
import { SafeArea } from '../../../components/utility/safe-area.component';

import { CompaniesContext } from '../../../services/companies/companies.context';
import { Search } from '../components/search.component';


// const CompanyListContainer = styled.View`
//   flex: 1;
//   padding: ${(props) => props.theme.space[3]};
// `;

export const CompaniesScreen = ({navigation}) => {
  const {isLoading, companies, error} = useContext(CompaniesContext);
  return  (
    <SafeArea >
      <Search />
      <FlatList
        data ={companies}
        renderItem={({item})=>{
          return(
            <TouchableOpacity
              onPress={()=>
                navigation.navigate('CompanyDetailt', {
                  company:item,
                })
              }
            >
              <CompaniesInfoCard company={item}/>
            </TouchableOpacity>
          );}}
        keyExtractor={(item)=> item.name}
        contentContainerStyle={{padding:16}}


      />
      {/* <CompanyListContainer > */}

      {/* </CompanyListContainer> */}
    </SafeArea>

  );
};