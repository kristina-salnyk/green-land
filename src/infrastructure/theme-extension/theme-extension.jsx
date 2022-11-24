import { useFonts } from 'expo-font';
import { theme } from '../theme';
import { ThemeProvider } from 'styled-components';

export const ThemeExtension = ({ children }) => {
  const [fontsLoaded] = useFonts({
    'Pacifico-Regular': require('../../../assets/fonts/Pacifico-Regular.ttf'),
  });

  const extendedTheme = {
    ...theme,
    fonts: { ...theme.fonts, logo: 'Pacifico-Regular' },
  };

  return fontsLoaded ? (
    <ThemeProvider theme={extendedTheme}>{children}</ThemeProvider>
  ) : null
};