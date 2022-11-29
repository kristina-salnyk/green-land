import React from 'react-native';
import PropTypes from 'prop-types';
import { getIconByName } from './getIconByName';

export const Icon = ({ iconName, iconStyle = {} }) => {
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

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconStyle: PropTypes.object,
};
