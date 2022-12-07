import { useState } from "react"
import { View } from "react-native"
import Button from "../UI/Button"
import Input from "./Input"




function CompanyForm({submitButtonLabel, onCancel, onSubmit , defaultValues}) {
    const [inputValues, setInputValues] = useState({
        lat: defaultValues ? defaultValues.lat.toString() : '',
        lng: defaultValues ? defaultValues.lng.toString() : '',
        name: defaultValues ? defaultValues.name.toString() : '',
        rating: defaultValues ? defaultValues.rating.toString() : '',
        vicinity: defaultValues ? defaultValues.vicinity.toString() : '',
    });
    function inputChangeHandler(inputIdentifier, enteredValue){
        setInputValues((curInputValues) => {
            return {
                ...curInputValues,
                [inputIdentifier]: enteredValue
            }
        })
    }

    function submitHandler(){
        const companyData = {
            lat: inputValues.lat,
            lng: inputValues.lng,
            name: inputValues.name,
            rating: inputValues.rating,
            vicinity: inputValues.vicinity
        }
        onSubmit(companyData)
    }
    return (
        <View>
            <Input label="lat" textInputConfig={{
                onChangeText: inputChangeHandler.bind(this, 'lat'),
                value: inputValues.lat
            }}/>
            <Input label="lng" textInputConfig={{
                  onChangeText: inputChangeHandler.bind(this, 'lng'),
                  value: inputValues.lng
            }}/>
            <Input label="name"  textInputConfig={{
                  onChangeText: inputChangeHandler.bind(this, 'name'),
                  value: inputValues.name
            }}/>
             <Input label="rating"  textInputConfig={{
                  onChangeText: inputChangeHandler.bind(this, 'rating'),
                  value: inputValues.rating
            }}/>
             <Input label="vicinity"  textInputConfig={{
                  onChangeText: inputChangeHandler.bind(this, 'vicinity'),
                  value: inputValues.vicinity
            }}/>
                <View>
            <Button mode="flat" onPress={onCancel}>Cancel</Button>
            <Button  onPress={submitHandler}>{submitButtonLabel}</Button>
        </View>
        </View>
    )
}

export default CompanyForm