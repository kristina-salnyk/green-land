import React from 'react-native';
import { Button as ButtonStyled, Text } from './button.styled';
import PropTypes from 'prop-types';
import { ButtonIcon } from './button-icon';

export const Button = ({ onPress, text, color, size, iconName, iconStyle }) => {
  return (
    <ButtonStyled onPress={onPress} color={color} size={size}>
      {iconName && <ButtonIcon iconName={iconName} iconStyle={iconStyle} />}
      <Text size={size}>{text}</Text>
    </ButtonStyled>
  );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  iconName: PropTypes.string,
  iconStyle: PropTypes.object,
};
