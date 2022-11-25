import styled from 'styled-components/native';

export const Avatar = styled.Image`
  display: block;
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

export const Name = styled.Text`
  padding: ${props => props.theme.space[4]} 0;
  font-size: ${props => props.theme.fontSizes.h2};
  font-weight: ${props => props.theme.fontWeights.bold};
`;
