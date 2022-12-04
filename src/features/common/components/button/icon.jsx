import React from 'react-native';
import PropTypes from 'prop-types';
import { getIconByName } from './getIconByName';

export const Icon = ({ iconName, size= 35, iconStyle = {} }) => {
  const icon = getIconByName(iconName);
  const IconComponent = icon.component;

  return (
    <IconComponent
      name={icon.source ?? iconName}
      size={size}
      style={{ position: 'absolute', top: 10, left: 20, ...iconStyle }}
    />
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  size: PropTypes.number,
  iconStyle: PropTypes.object,
};
