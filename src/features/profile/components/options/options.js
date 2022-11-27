import React from 'react-native';
import { Button } from '../../../common/components/button/button';
import { useUser } from '../../../../contexts/user-context';
import { USER_TYPES } from '../../../../constants';

export const Options = () => {
  const { userType } = useUser();

  return (
    <>
      <Button
        onPress={() => {}}
        text="Edit profile"
        iconName="edit"
        iconStyle={{ top: 12 }}
      />
      {userType === USER_TYPES.ADMIN && (
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
      {userType === USER_TYPES.USER && (
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
