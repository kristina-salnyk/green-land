import { useState } from 'react';
import { ROLES } from '../../../constants';

export const useAuthData = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(ROLES.USER);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const changeName = text =>
    setName(text ? text[0].toUpperCase() + text.slice(1) : text);
  const changeEmail = text => setEmail(text);
  const changePassword = text => setPassword(text);
  const changeRole = value => setRole(value ? ROLES.COMPANY : ROLES.USER);
  const toggleIsPasswordHidden = () => setIsPasswordHidden(!isPasswordHidden);

  return {
    name,
    email,
    password,
    role,
    isPasswordHidden,
    changeName,
    changeEmail,
    changePassword,
    changeRole,
    toggleIsPasswordHidden,
  };
};
