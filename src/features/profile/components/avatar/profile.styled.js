import styled from 'styled-components/native';

export const Avatar = styled.Image`
  margin-top: ${props => props.theme.space[4]};
  display: block;
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

export const Name = styled.Text`
  padding: ${props => props.theme.space[3]} 0;
  font-size: ${props => props.theme.fontSizes.h4};
  font-weight: ${props => props.theme.fontWeights.bold};
`;
