import { Pressable, StyleSheet, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"

function CompanyItem({id, name,address }){
   const  navigation = useNavigation();
    function companyPressHandler(){
        navigation.navigate('ManageCompany', {
            companyId: id
        })
    }
    return <Pressable onPress={companyPressHandler} style={({pressed}) => pressed && styles.pressed} android_ripple>
        <View>
            <Text>{name}</Text>

        </View>
        <View>
            <Text>{address}</Text>
        </View>
    </Pressable>
}

export default CompanyItem


const styles = StyleSheet.create({
    pressed: {
        opacity: 0.2
    }
})