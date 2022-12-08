import RadioButtonRN from 'radio-buttons-react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';

export const Radio = ({ data, initial, onSelect }) => {
  const theme = useTheme();

  return (
    <RadioButtonRN
      data={data}
      selectedBtn={onSelect}
      initial={data.findIndex(item => item.value === initial) + 1}
      style={{ display: 'flex', flexDirection: 'row' }}
      boxStyle={{ width: '50%' }}
      boxDeactiveBgColor={theme.colors.bg.secondary}
      activeColor={theme.colors.ui.primary}
      deactiveColor={theme.colors.bg.secondary}
      textStyle={{ marginLeft: 10, fontWeight: 'bold' }}
    />
  );
};

Radio.propTypes = {
  data: PropTypes.array.isRequired,
  initial: PropTypes.any.isRequired,
  onSelect: PropTypes.func,
};
