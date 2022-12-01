import React  from 'react-native';
import { Button as ButtonStyled, Text } from './button.styled';
import PropTypes from 'prop-types';
import { Icon } from './icon';

export const Button = ({
  onPress,
  text,
  color,
  size = 'normal',
  iconName,
  iconStyle,
}) => {
  return (
    <ButtonStyled
      onPress={onPress}
      color={color}
      size={size}
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 8,
      }}
    >
      {iconName && <Icon iconName={iconName} iconStyle={iconStyle} />}
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
