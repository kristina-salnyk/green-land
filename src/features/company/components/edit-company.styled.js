import styled from 'styled-components/native';

export const Title = styled.Text`
  padding: ${props => props.theme.space[1]} 0;
  font-size: ${props => props.theme.fontSizes.body};
  font-weight: ${props => props.theme.fontWeights.bold};
  text-align: center;
`;

export const SubTitle = styled.Text`
  padding: ${props => props.theme.space[1]} 0;
  font-size: ${props => props.theme.fontSizes.title};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.brand.primary};
  text-decoration: underline;
`;