import styled from 'styled-components/native';

export const Profile = styled.View`
  padding: ${props => props.theme.space[2]} 0;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 140px;
  height: 140px;
  object-fit: contain;
  border-radius: 100px;
`;

export const Name = styled.Text`
  padding: ${props => props.theme.space[3]} 0;
  font-size: ${props => props.theme.fontSizes.h4};
  font-weight: ${props => props.theme.fontWeights.bold};
`;
