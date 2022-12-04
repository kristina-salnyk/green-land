import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { categoryImages } from "../../../../images";
import { Card } from 'react-native-paper';
function OptionItem({title, imageUrl, id, navigation}){
  
    return (
        <SafeArea>
    <View style={styles.optionItem}>
        <Pressable 
        android_ripple={{color: '#ccc'}} 
        style={({pressed}) => 
             pressed ? styles.buttonPressed : null
        }
    
        onPress={() => {
            navigation.navigate("NavigationBar", {
                screen: 'CategoriesPage'
               })
        }}
        >
            <View>
                <Image source={categoryImages[id - 1]} style={styles.image}/>
                <Text style={styles.title}>{title}</Text>
            </View>
 
        </Pressable>
      
    </View>
    </SafeArea>
    );
}


export default OptionItem;


const styles = StyleSheet.create({
    optionItem:{
        margin: 16,
        borderWidth: 2,
        backgroundColor: '#3BB03D',
        elevation: 4,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginBottom: 10
    },
    innerContainer:{
        overflow: "hidden"
    },
    image:{
        width: 250,
        height: 140,
        marginTop: -30,
        borderWidth: 2,
    borderColor: "black"
       
    },
    title:{
        fontWeight:'bold',
        textAlign: 'center',
        fontSize: 16,
        margin: 8
    },
    buttonPressed:{
        opacity:0.5
      },
})