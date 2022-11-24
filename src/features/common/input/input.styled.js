import styled from 'styled-components/native';

export const Field = styled.View`
  margin-top: ${props => props.theme.space[3]};
  position: relative;
  width: 100%;
`;

export const Input = styled.TextInput`
  padding: ${props => props.theme.space[3]};
  font-size: ${(props => props.theme.fontSizes.body)};
  border: 1px solid ${props => props.theme.colors.border.input};
  border-radius: ${(props) => props.theme.radii.normal};
  width: 100%;
`;

export const Icon = styled.Pressable`
  padding: ${props => props.theme.space[2]};
  position: absolute;
  top: 0;
  right: ${props => props.theme.space[2]};
  height: 100%;
  justify-content: center;
`;