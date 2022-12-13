import React from 'react-native';
import { DeviceEventEmitter, StyleSheet, View } from 'react-native';
import CompanyForm from './components/ManageCompany/CompanyForm';
import PropTypes from 'prop-types';

function ManageCompany({ route, navigation }) {
  const currentAddress = route.params?.currentAddress;

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler(companyData) {
    DeviceEventEmitter.emit('event.onChangeAddress', {
      address: companyData?.address,
      locationLatitude: companyData?.location?.lat,
      locationLongitude: companyData?.location?.lng,
    });
    DeviceEventEmitter.removeAllListeners('event.onChangeAddress');

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <CompanyForm
        submitButtonLabel="Add"
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        defaultValues={currentAddress}
      />
    </View>
  );
}

ManageCompany.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.shape({
    params: PropTypes.shape({
      currentAddress: PropTypes.object,
    }),
  }),
};

export default ManageCompany;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
