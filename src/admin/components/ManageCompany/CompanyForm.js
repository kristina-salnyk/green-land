import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { Place } from '../../models/place';
import LocationPicker from '../Location/LocationPicker';
import { Button } from '../../../features/common/components/button/button';

function CompanyForm({ submitButtonLabel, onCancel, onSubmit, defaultValues }) {
  const [inputValues, setInputValues] = useState({
    name: defaultValues ? defaultValues.name.toString() : '',
  });

  const [pickedLocation, setPickedLocation] = useState();

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputValues(curInputValues => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  function submitHandler() {
    const companyData = new Place(inputValues.name, pickedLocation);
    onSubmit(companyData);
  }

  const pickLocationHandler = useCallback(location => {
    setPickedLocation(location);
  }, []);

  function saveForm() {}
  return (
    <View>
      <LocationPicker onPickLocation={pickLocationHandler} />
      <View>
        <Button onPress={submitHandler} text={submitButtonLabel}></Button>
        <Button mode="flat" onPress={onCancel} text="Cancel"></Button>
      </View>
    </View>
  );
}

export default CompanyForm;
