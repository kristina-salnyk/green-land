import React from 'react-native';
import { Button } from '../../../common/components/button/button';
import { useUser } from '../../../../contexts/user-context';
import PropTypes from 'prop-types';
import { ROLES, ROUTES } from '../../../../constants';

export const Options = ({ navigation }) => {
  const { userData } = useUser();

  const isCompany = userData.role === ROLES.COMPANY;
  return (
    <>
      <Button
        navigation={navigation}
        onPress={() =>
          navigation.navigate(
            isCompany
              ? ROUTES.EDIT_COMPANY_PROFILE
              : ROUTES.EDIT_PROFILE
          )
        }
        text="Edit profile"
        iconName="edit"
        iconStyle={{ top: 12 }}
      />
      {isCompany && (
        <Button
          onPress={() => {}}
          text="My company"
          iconName="building-o"
          iconStyle={{ top: 10 }}
        />
      )}
      <Button
        onPress={() => {}}
        text="My message"
        iconName="envelope-o"
        iconStyle={{ top: 8 }}
      />
      <Button
        onPress={() => {}}
        text="Invite friends"
        iconName="calendar-o"
        iconStyle={{ top: 10 }}
      />
      <Button
        onPress={() => {}}
        text="FAQ"
        iconName="message-question-outline"
        iconStyle={{ top: 12 }}
      />
      {!isCompany && (
        <Button
          onPress={() => {}}
          text="Go to utilize!"
          color="secondary"
          size="large"
        />
      )}
    </>
  );
};

Options.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};
