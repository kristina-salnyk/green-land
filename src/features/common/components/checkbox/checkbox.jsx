import React from 'react-native';
import { Checkbox as CheckboxStyled } from './checkbox.styled';
import { useTheme } from 'styled-components/native';
import PropTypes from 'prop-types';

export const Checkbox = ({ isChecked, text, onPress }) => {
  const theme = useTheme();

  return (
    <CheckboxStyled
      isChecked={isChecked}
      onPress={onPress}
      text={text}
      textStyle={{
        textDecorationLine: 'none',
        color: `${theme.colors.ui.primary}`,
      }}
      fillColor={theme.colors.ui.primary}
    />
  );
};

Checkbox.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
