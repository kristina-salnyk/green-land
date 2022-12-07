import { Pressable, StyleSheet, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"

function CompanyItem({id, lat, lng, name, rating, vicinity }){
   const  navigation = useNavigation();
    function companyPressHandler(){
        navigation.navigate('ManageCompany', {
            companyId: id
        })
    }
    return <Pressable onPress={companyPressHandler} style={({pressed}) => pressed && styles.pressed} android_ripple>
        <View>
            <Text>{lat}</Text>
            <Text>{lng}</Text>
            <Text>{name}</Text>
            <Text>{rating}</Text>
        </View>
        <View>
            <Text>{vicinity}</Text>
        </View>
    </Pressable>
}

export default CompanyItem


const styles = StyleSheet.create({
    pressed: {
        opacity: 0.2
    }
})