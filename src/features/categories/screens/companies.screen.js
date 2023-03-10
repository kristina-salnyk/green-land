import React, { useContext } from 'react';
import { FlatList, Platform, TouchableOpacity } from 'react-native';
import { CompaniesInfoCard } from '../components/companies-info-card';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { StyleSheet } from 'react-native';
import { CompaniesContext } from '../../../services/companies/companies.context';
import { Search } from '../components/search.component';
import { OptionsInfoCard } from '../../categories-search/components/categories-info-option-card';


export const CompaniesScreen = ({navigation, route}) => {
   let itemId  = route.params?.catId;

  const {isLoading, companies, categories, collectionpoint, error} = useContext(CompaniesContext);

console.log(itemId)

  if(itemId){
   
  
    return  (
      <SafeArea >
        <Search />
   
        <FlatList
   
          data ={categories[itemId-1].collectionPoints}
     
          renderItem={({item})=>{
            return(
              <TouchableOpacity
              key={item.name}
                onPress={()=>
                 
                  navigation.navigate('CompanyDetailt', {
                    screen: 'CompanyDetailt',
                    company:item,
             
                  })
                }
              >
                <OptionsInfoCard company={item}/>
                
              </TouchableOpacity>
            );}}
          keyExtractor={(item)=> item.id}
          contentContainerStyle={{padding:16}}
  
  
        />
  
        
      </SafeArea>
  
    );
  } else {
    console.log('location')
  return  (
    <SafeArea >

      <Search />
      <FlatList
        data={companies}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity

            key={item.id}
              onPress={()=>
               

                navigation.navigate('CompanyDetailt', {
                  screen: 'CompanyDetailt',
                  company: item,
                })
              }
            >
              <CompaniesInfoCard company={item} />
            </TouchableOpacity>

          );}}
        keyExtractor={(item)=> item.id}
        contentContainerStyle={{padding:16}}


      />

      

    </SafeArea>
  );
            }
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    padding: 10,
    margin: 16,
    height: 200,
    elevation: 4,
    backgroundColor: '#3BB03D',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    borderRadius: 8,
    borderWidth: 2,
  },
});
