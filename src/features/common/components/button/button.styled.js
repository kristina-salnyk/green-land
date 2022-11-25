import styled from 'styled-components/native';

export const Group = styled.View`
  margin-top: ${props => props.theme.space[3]}
  max-width: 500px;
  width: 90%;
`;

export const Button = styled.TouchableOpacity`
  margin-top: ${props => props.theme.space[props.size === 'large' ? 5 : 3]};
  padding: ${props =>  props.theme.space[props.size === 'large' ? 4 : 3]};
  background-color: ${props => props.theme.colors.brand[props.color]};
  border-radius: ${props => props.theme.radii.normal};
  width: 100%;
  position: relative;
  shadow-opacity: 0.4;
  shadow-radius: 5px;
  shadow-color:  ${props => props.theme.colors.ui.primary};
  shadow-offset: 0px 2px;
`;

export const Text = styled.Text`
  font-size: ${props => props.theme.fontSizes[props.size === 'large' ? 'h5' : 'button']};
  font-weight: ${props => props.theme.fontWeights.bold};
  text-align: center;
`;