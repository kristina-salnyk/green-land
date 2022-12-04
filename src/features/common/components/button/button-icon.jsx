import React from 'react-native';
import { TouchableOpacity } from 'react-native';
import { getIconByName } from './getIconByName';
import PropTypes from 'prop-types';

export const ButtonIcon = ({ onPress, iconName, iconStyle }) => {
  const icon = getIconByName(iconName);
  const IconComponent = icon.component;

  return (
    <TouchableOpacity onPress={onPress}>
      <IconComponent name={iconName} size={40} style={{ ...iconStyle }} />
    </TouchableOpacity>
  );
};

ButtonIcon.propTypes = {
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string,
  iconStyle: PropTypes.object,
};
