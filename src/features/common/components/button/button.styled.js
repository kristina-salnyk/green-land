import styled from 'styled-components/native';

export const Group = styled.View`
  margin-top: ${props => props.theme.space[3]}
  max-width: 500px;
  width: 90%;
`;

export const Button = styled.TouchableOpacity`
  margin-top: ${props => props.theme.space[3]};
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.brand[props.color]};
  border-radius: ${props => props.theme.radii.normal};
  width: 100%;
`;

export const Text = styled.Text`
  font-size: ${props => props.theme.fontSizes.button};
  font-weight: ${props => props.theme.fontWeights.bold};
  text-align: center;
`;