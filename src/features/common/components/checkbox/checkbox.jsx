import { Checkbox as CheckboxStyled} from './checkbox.styled';
import { useTheme } from 'styled-components/native';

export const Checkbox = ({ value, text, onPress }) => {
  const theme = useTheme();

  return (
    <CheckboxStyled
      value={value}
      onPress={onPress}
      text={text}
      textStyle={{
        textDecorationLine: 'none',
        color: `${theme.colors.ui.primary}`
      }}
      fillColor={theme.colors.ui.primary}
    />
  );
};