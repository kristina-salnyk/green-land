import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";

function OptionItem({title, imageUrl}){
    return (
        <SafeArea>
    <View style={styles.optionItem}>
        <Pressable 
        android_ripple={{color: '#ccc'}} 
        style={({pressed}) => 
             pressed ? styles.buttonPressed : null
        }
    
        >
            <View>
                <Image source={{uri: imageUrl }} style={styles.image}/>
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

        backgroundColor: '#3BB03D',
        elevation: 4,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginBottom: 50
    },
    innerContainer:{
        overflow: "hidden"
    },
    image:{
        width: 250,
        height: 150,
        marginTop: -50
       
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