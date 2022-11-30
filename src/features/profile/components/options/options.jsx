import React from 'react-native';
import { Button } from '../../../common/components/button/button';
import { useUser } from '../../../../contexts/user-context';
import PropTypes from 'prop-types';
import { ROUTES } from '../../../../constants';

export const Options = ({ navigation }) => {
  const { userData } = useUser();

  return (
    <>
      <Button
        navigation={navigation}
        onPress={() => navigation.navigate(ROUTES.EDIT_PROFILE)}
        text="Edit profile"
        iconName="edit"
        iconStyle={{ top: 12 }}
      />
      {userData?.isAdmin && (
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
      {!userData?.isAdmin && (
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