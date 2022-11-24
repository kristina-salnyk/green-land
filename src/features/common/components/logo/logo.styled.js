import styled from 'styled-components/native';

export const Img = styled.Image`
  display: block;
  width: 180px;
  height: 180px;
  object-fit: contain;
`;

export const Text = styled.Text`
  font-family: ${props => props.theme.fonts.logo};
  font-size: ${props => props.theme.fontSizes.h4};
  text-align: center;
`;