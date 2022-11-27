import React from 'react-native';
import { ICONS } from '../../../../constants';
import PropTypes from 'prop-types';

const getIconByName = name => {
  const iconIdx = ICONS.findIndex(item => item.name === name);
  if (iconIdx === -1) {
    return null;
  }
  return ICONS[iconIdx];
};

export const ButtonIcon = ({ iconName, iconStyle={}}) => {
  const icon = getIconByName(iconName);
  const IconComponent = icon.component;

  return (
    <IconComponent
      name={iconName}
      size={35}
      style={{ position: 'absolute', top: 10, left: 30, ...iconStyle }}
    />
  );
};

ButtonIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconStyle : PropTypes.object
};
