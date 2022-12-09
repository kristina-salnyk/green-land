import { useCallback, useState } from "react"
import { View } from "react-native"
import { Place } from "../../models/place";
import LocationPicker from "../Location/LocationPicker";
import Button from "../UI/Button"
import Input from "./Input"




function CompanyForm({submitButtonLabel, onCancel, onSubmit , defaultValues}) {
    const [inputValues, setInputValues] = useState({
        // lat: defaultValues ? defaultValues.lat.toString() : '',
        // lng: defaultValues ? defaultValues.lng.toString() : '',
        name: defaultValues ? defaultValues.name.toString() : '',
        // rating: defaultValues ? defaultValues.rating.toString() : '',
        // vicinity: defaultValues ? defaultValues.vicinity.toString() : '',
    });

    const [pickedLocation, setPickedLocation] = useState()
    function inputChangeHandler(inputIdentifier, enteredValue){
        setInputValues((curInputValues) => {
            return {
                ...curInputValues,
                [inputIdentifier]: enteredValue
            }
        })
    }

    // function submitHandler(){
    //     const companyData = {
    //         lat: inputValues.lat,
    //         lng: inputValues.lng,
    //         name: inputValues.name,
    //         rating: inputValues.rating,
    //         vicinity: inputValues.vicinity
    //     }
    //     onSubmit(companyData)
    // }
    
    function submitHandler(){
        const companyData = new Place(inputValues.name, pickedLocation)
        onSubmit(companyData)
    }

    const pickLocationHandler = useCallback((location) => {
        setPickedLocation(location)
    }, [])

    function saveForm(){
        console.log(pickedLocation)
    }
    return (
        <View>
            <Input label="name"  textInputConfig={{
                  onChangeText: inputChangeHandler.bind(this, 'name'),
                  value: inputValues.name
            }}/>
                   <LocationPicker onPickLocation={pickLocationHandler}/>
                <View>
            <Button mode="flat" onPress={onCancel}>Cancel</Button>
            <Button  onPress={submitHandler}>{submitButtonLabel}</Button>
 
        </View>
        </View>
    )
}

export default CompanyForm