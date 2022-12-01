import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  margin-top: ${props => props.theme.space[props.size === 'large' ? 5 : 3]};
  padding: ${props => props.theme.space[props.size === 'large' ? 4 : 3]};
  background-color: ${props =>
    props.theme.colors.brand[props.color || 'primary']};
  border-radius: ${props => props.theme.radii.normal};
  width: 100%;
  position: relative;
`;

export const Text = styled.Text`
  font-size: ${props =>
    props.theme.fontSizes[props.size === 'large' ? 'h5' : 'button']};
  font-weight: ${props => props.theme.fontWeights.bold};
  text-align: center;
`;
