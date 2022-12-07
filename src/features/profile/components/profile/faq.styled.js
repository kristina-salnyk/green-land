import styled from 'styled-components/native';

export const Title = styled.Text`
  padding: ${props => props.theme.space[4]} 0;
  font-size: ${props => props.theme.fontSizes.h3};
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const Info = styled.Text`
  padding-top: ${props => props.theme.space[4]};
  font-size: ${props => props.theme.fontSizes.title};
  text-align: justify;
  font-style: italic;

`;

export const SubTitle = styled.Text`
  padding: ${props => props.theme.space[1]} 0;
  font-size: ${props => props.theme.fontSizes.title};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.brand.primary};
`;