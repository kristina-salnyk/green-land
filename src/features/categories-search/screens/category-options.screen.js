import React from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
import { OPTIONS } from "../../../data/category-data";
import OptionItem from "../components/OptionItem";
import { SafeArea } from "../../../components/utility/safe-area.component";
function CategoryOptionsOverview({route}){
    const catId = route.params.categoryId;

    const  displayedOptions = OPTIONS.filter((optionItem)=>{
        return  optionItem.categoryIds.indexOf(catId) >=0
    });


    function renderOptionItem(itemData){
        return  <OptionItem title={itemData.item.title} imageUrl={itemData.item.imageUrl} id={itemData.item.id}/>
        
    }
    return (
        <SafeArea>
             <Text style={styles.header}>Choose the best option</Text>
        <View style={styles.container}>
            <FlatList 
            data = {displayedOptions}
            keyExtractor={(item) => item.id}
            renderItem={renderOptionItem}
            />
        </View>
        </SafeArea>
    )
}

export default CategoryOptionsOverview


const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16
    },
    header:{
        fle: 1,
        fontSize: 32,
        fontWeight: 'bold',
        padding:10,
      }
})