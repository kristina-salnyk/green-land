import React, {useContext} from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { CompaniesInfoCard } from '../components/companies-info-card';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { StyleSheet } from 'react-native';
import { CompaniesContext } from '../../../services/companies/companies.context';
import { Search } from '../components/search.component';
import { AppNavigator } from '../../../infrastructure/navigation/app.navigator';
import { MapScreen } from '../../map/screens/map.screen';
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
                screen: "CompanyDetailt",
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



const styles = StyleSheet.create({
  box:{
    flex: 1,
    padding:10,
    margin: 16,
    height: 200,
    elevation: 4,
    backgroundColor: '#3BB03D',
    overflow: Platform.OS === 'android' ?'hidden' : 'visible',
    borderRadius: 8,
    borderWidth: 2,
 
  },

})