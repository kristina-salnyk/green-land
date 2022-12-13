import { useContext, useEffect, useLayoutEffect } from 'react';
import { DeviceEventEmitter, StyleSheet, Text, View } from 'react-native';
import IconButton from './components/UI/IconButton';
import Button from './components/UI/Button';
import { CompaniesContextEdit } from './store/companies-context';
import CompanyForm from './components/ManageCompany/CompanyForm';
import PropTypes from 'prop-types';
function ManageCompany({ route, navigation }) {
  const companiesCtx = useContext(CompaniesContextEdit);

  const editedCompanyId = route.params?.companyId;
  const isEditing = !!editedCompanyId;

  const selectedCompany = companiesCtx.companies.find(
    company => company.id === editedCompanyId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit' : 'Add',
    });
  }, [navigation, isEditing]);

  function deleteCompanyHandler() {
    navigation.goBack();
    companiesCtx.deleteCompany(editedCompanyId);
  }

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

    if (isEditing) {
      companiesCtx.updateCompany(editedCompanyId, companyData);
    } else {
      companiesCtx.addCompany(companyData);
    }
    // navigation.navigate('EditCompanyScreen', {
    //   addressData: companyData.address,
    // });
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <CompanyForm
        submitButtonLabel={isEditing ? 'Update' : 'Add'}
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        defaultValues={selectedCompany}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton icon="trash" size={36} onPress={deleteCompanyHandler} />
        </View>
      )}
    </View>
  );
}

ManageCompany.propTypes = {
  navigation: PropTypes.object,
};

export default ManageCompany;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    alignItems: 'center',
  },
});
