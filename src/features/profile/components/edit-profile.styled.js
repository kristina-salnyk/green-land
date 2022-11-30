import styled from 'styled-components/native';

export const FormContainer = styled.KeyboardAvoidingView`
  background-color: ${props => props.theme.colors.bg.primary};
  flex: 4;
`;

export const Field = styled.View`
  margin-top: ${props => props.theme.space[3]};
  position: relative;
`;

export const Label = styled.Text`
  font-size: ${props => props.theme.fontSizes.caption};
`;

export const Input = styled.TextInput`
  padding: ${props => props.theme.space[2]};
  font-size: ${props => props.theme.fontSizes.title};
  border-bottom: 1px solid ${props => props.theme.colors.border.input};
  width: 100%;
  border-bottom-color: ${props => props.theme.colors.brand.primary};
  border-bottom-width: 2px;
  text-align: center;
`;

export const Info = styled.Text`
  padding-top: ${props => props.theme.space[4]};
  font-size: ${props => props.theme.fontSizes.title};
  text-align: center;
  font-style: italic;
  flex: 2;
`;
