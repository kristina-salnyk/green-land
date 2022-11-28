import React from 'react-native';
import { Checkbox as CheckboxStyled } from './checkbox.styled';
import { useTheme } from 'styled-components/native';
import PropTypes from 'prop-types';

export const Checkbox = params => {
  const theme = useTheme();

  const styleOptions = {
    textStyle: {
      textDecorationLine: 'none',
      color: `${theme.colors.ui.primary}`,
    },
    fillColor: theme.colors.ui.primary,
  };
  return <CheckboxStyled {...params} {...styleOptions} />;
};

Checkbox.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
