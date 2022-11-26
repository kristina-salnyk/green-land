import React  from 'react-native';
import { Button, Text } from '../../../common/components/button/button.styled';
import { useUser } from '../../../../contexts/user-context';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Options = () => {
  const { userData } = useUser();

  return (
    <>
      <Button color="primary" onPress={() => {}}>
        <FontAwesomeIcons
          name="edit"
          size={35}
          style={{ position: 'absolute', top: 12, left: 30 }}
        />
        <Text>Edit profile</Text>
      </Button>
      {userData.isAdmin && (
        <Button color="primary" onPress={() => {}}>
          <FontAwesomeIcons
            name="building-o"
            size={35}
            style={{ position: 'absolute', top: 10, left: 30 }}
          />
          <Text>My company</Text>
        </Button>
      )}
      <Button color="primary" onPress={() => {}}>
        <FontAwesomeIcons
          name="envelope-o"
          size={35}
          style={{ position: 'absolute', top: 8, left: 30 }}
        />
        <Text>My message</Text>
      </Button>
      <Button color="primary" onPress={() => {}}>
        <FontAwesomeIcons
          name="calendar-o"
          size={35}
          style={{ position: 'absolute', top: 10, left: 30 }}
        />
        <Text>Invite friends</Text>
      </Button>
      <Button color="primary" onPress={() => {}}>
        <MaterialCommunityIcons
          name="message-question-outline"
          size={35}
          style={{ position: 'absolute', top: 12, left: 30 }}
        />
        <Text>FAQ</Text>
      </Button>
      {userData.isAdmin && (
        <Button color="secondary" size="large" onPress={() => {}}>
          <Text size="large">Go to utilize!</Text>
        </Button>
      )}
    </>
  );
};
