import styled from 'styled-components/native';

export const Text = styled.Text`
  font-size: ${props => props.theme.fontSizes.button};
  font-weight: ${props => props.theme.fontWeights.bold};
  text-align: center;
  text-decoration: underline;
`;
