import BouncyCheckbox from 'react-native-bouncy-checkbox';
import styled from 'styled-components/native';

export const Checkbox = styled(BouncyCheckbox)`
  margin-top: ${props => props.theme.space[3]};
  margin-bottom: ${props => props.theme.space[2]};
`;
