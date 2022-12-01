import React from 'react-native';
import { Button } from '../../../common/components/button/button';
import { useUser } from '../../../../contexts/user-context';
import PropTypes from 'prop-types';
import { ROUTES } from '../../../../constants';

export const CompanyOptions = ({ navigation }) => {
  const { userData } = useUser();

  return (
    <>
      <Button
        navigation={navigation}
        onPress={() =>
          navigation.navigate(
            userData?.isAdmin
              ? ROUTES.EDIT_COMPANY_PROFILE
              : ROUTES.EDIT_PROFILE
          )
        }
        text="Edit company's profile"
        iconName="edit"
        iconStyle={{ top: 12 }}
      />
      <Button
        onPress={() => {}}
        text="Messages from customers"
        iconName="envelope-o"
        iconStyle={{ top: 8 }}
      />
      <Button
        onPress={() => {}}
        text="Add the collection point"
        iconName="sourcetree"
        iconStyle={{ top: 10 }}
      />
      <Button
        onPress={() => {}}
        text="Edit the collection point"
        iconName="edit-point"
        iconStyle={{ top: 12 }}
      />
    </>
  );
};

CompanyOptions.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};
