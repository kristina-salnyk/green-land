import styled from 'styled-components/native';

export const Heading = styled.Text`
  padding: ${props => props.theme.space[4]} 0;
  font-size: ${props => props.theme.fontSizes.h2};
  font-weight: ${props => props.theme.fontWeights.bold};
`;