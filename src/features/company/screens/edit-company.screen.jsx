import {
  DeviceEventEmitter,
  FlatList,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Menu } from '../../common/components/menu/menu';
import React, { useEffect, useState } from 'react';
import {
  FormFields,
  ListContainer,
  ScreenContainer,
} from '../../common/components/screen-container/screen-container.styled';
import PropTypes from 'prop-types';
import { Input, SubTitle, Title } from '../components/edit-company.styled';
import {
  Field,
  FormContainer,
  Label,
} from '../../profile/components/profile/edit-profile.styled';
import { Button } from '../../common/components/button/button';
import { useCompanyData } from '../../common/hooks/use-company-data';
import { Radio } from '../../common/components/radio/radio';
import { SERVICE_TYPE_OPTIONS, TAKING_OUT_OPTIONS } from '../../../constants';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../../infrastructure/theme';
import { getCategories } from '../../../api/get-categories';
import { Checkbox } from '../../common/components/checkbox/checkbox';
import { Loader } from '../../common/components/loader/loader';
import { useLoading } from '../../../contexts/loading-context';

const NAME = 'The name of company (description optional)';
const EMAIL = 'The e-mail address';
const ADDRESS = 'Find the address on the map';
const PHONE = 'The phone number';
const WORK_HOURS = 'The work hours';
const SERVICE = 'The service is';
const TAKING_OUT = 'Taking out';

export const EditCompanyScreen = ({ navigation }) => {
  const {
    name,
    email,
    address,
    phone,
    workHours,
    paymentType,
    services,
    takingOut,
    locationLatitude,
    locationLongitude,
    changeName,
    changeEmail,
    changeAddress,
    changePhone,
    changeWorkHours,
    changePaymentType,
    changeTakingOut,
    changeServiceState,
    changeServices,
    changeLocationLatitude,
    changeLocationLongitude,
    updateCompanyData,
  } = useCompanyData({ navigation });
  const [page, setPage] = useState(1);
  const { isLoading, setIsLoading, setError } = useLoading();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const data = await getCategories();
        changeServices(data.map(item => ({ ...item, checked: false })));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const onChangeAddress = location => {
    changeAddress(location.address);
    changeLocationLatitude(location.locationLatitude);
    changeLocationLongitude(location.locationLongitude);
    DeviceEventEmitter.removeAllListeners('event.onChangeAddress');
  };

  return (
    <ScreenContainer space={Platform.OS === 'ios' ? 5 : 4}>
      <Menu navigation={navigation} />

      {page === 1 ? (
        <Title>
          We kindly ask you to provide all necessary information about your
          company
        </Title>
      ) : (
        <>
          <Title>The services you provide</Title>
          <SubTitle>Disposal of:</SubTitle>
        </>
      )}

      <FormContainer behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {page === 1 && (
          <FormFields>
            <Field>
              <Label>{NAME}</Label>
              <Input value={name} onChangeText={changeName} />
            </Field>

            <Field>
              <Label>{EMAIL}</Label>
              <Input value={email} onChangeText={changeEmail} />
            </Field>
            <Field>
              <Label>{ADDRESS}</Label>
              <View style={styles.parent}>
                <Input
                  style={styles.textInput}
                  value={address}
                  onChangeText={changeAddress}
                  editable={false}
                  multiline={true}
                />
                <TouchableOpacity
                  style={styles.ButtonParent}
                  onPress={() => {
                    DeviceEventEmitter.addListener(
                      'event.onChangeAddress',
                      eventData => onChangeAddress(eventData)
                    );
                    navigation.navigate('ManageCompany', {
                      pickedLat: locationLatitude,
                      pickedLng: locationLongitude,
                    });
                  }}
                >
                  <Ionicons name="location" size={42} />
                </TouchableOpacity>
              </View>
            </Field>
            <Field>
              <Label>{PHONE}</Label>
              <Input value={phone} onChangeText={changePhone} />
            </Field>
            <Field>
              <Label>{WORK_HOURS}</Label>
              <Input value={workHours} onChangeText={changeWorkHours} />
            </Field>
            <Field>
              <Label>{SERVICE}</Label>
              <Radio
                data={SERVICE_TYPE_OPTIONS}
                initial={paymentType}
                onSelect={({ value }) => changePaymentType(value)}
              />
            </Field>
            <Field>
              <Label>{TAKING_OUT}</Label>
              <Radio
                data={TAKING_OUT_OPTIONS}
                initial={takingOut}
                onSelect={({ value }) => changeTakingOut(value)}
              />
            </Field>
          </FormFields>
        )}
        {page === 2 && services.length > 0 && (
          <ListContainer>
            <FlatList
              data={services}
              renderItem={({ item }) => (
                <Checkbox
                  isChecked={item.checked}
                  onPress={state => changeServiceState(item.id, state)}
                  text={item.name}
                />
              )}
            />
          </ListContainer>
        )}
      </FormContainer>

      {page === 1 && (
        <Button
          onPress={() => setPage(2)}
          color="primary"
          text="Next &#x21d2;"
        />
      )}

      {page === 2 && (
        <>
          <Button onPress={updateCompanyData} color="primary" text="Save" />
          <Button
            onPress={() => setPage(1)}
            color="secondary"
            text="&#x21d0; Previous"
          />
        </>
      )}

      {isLoading && <Loader />}
    </ScreenContainer>
  );
};

EditCompanyScreen.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInput: {
    width: '85%',
  },
  ButtonParent: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: theme.colors.brand.primary,
  },
});
