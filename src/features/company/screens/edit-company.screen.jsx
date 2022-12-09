import { Platform } from 'react-native';
import { Menu } from '../../common/components/menu/menu';
import React, { useState } from 'react';
import {
  FormFields,
  ScreenContainer,
} from '../../common/components/screen-container/screen-container.styled';
import PropTypes from 'prop-types';
import { SubTitle, Title } from '../components/edit-company.styled';
import {
  Field,
  FormContainer,
  Input,
  Label,
} from '../../profile/components/profile/edit-profile.styled';
import { Button } from '../../common/components/button/button';
import { useCompanyData } from '../../common/hooks/use-company-data';
import { Radio } from '../../common/components/radio/radio';
import { SERVICE_TYPE_OPTIONS, TAKING_OUT_OPTIONS } from '../../../constants';

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
    serviceType,
    takingOut,
    changeName,
    changeEmail,
    changeAddress,
    changePhone,
    changeWorkHours,
    changeServiceType,
    changeTakingOut,
    updateCompanyData,
  } = useCompanyData();
  const [page, setPage] = useState(1);

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
        <FormFields>
          {page === 1 && (
            <>
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
                <Input value={address} onChangeText={changeAddress} />
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
                  initial={serviceType}
                  onSelect={({ value }) => changeServiceType(value)}
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
            </>
          )}
          {page === 2 && (
            <><Title>Page 2</Title>
            </>
          )}
        </FormFields>
      </FormContainer>

      {page === 1 && (
        <Button onPress={() => setPage(2)} color="primary" text="Next" />)}

      {page === 2 && (
        <>
          <Button onPress={updateCompanyData} color="primary" text="Create" />
          <Button onPress={() => setPage(1)} color="secondary" text="Back" />
        </>
      )}
    </ScreenContainer>
  );
};

EditCompanyScreen.propTypes = {
  navigation: PropTypes.object,
};
