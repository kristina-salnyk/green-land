import styled from 'styled-components/native';

export const Link = styled.Text`
  margin-top: ${props => props.theme.space[4]};
  font-size: ${props => props.theme.fontSizes.button};
  font-weight: ${props => props.theme.fontWeights.bold};
  text-align: center;
  text-decoration: underline;
`;
