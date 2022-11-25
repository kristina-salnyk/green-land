import { useState } from 'react';

export const useAuthData = () => {
    const [name, setName] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);

    const changeName = text => setName(text);
    const changeLogin = text => setLogin(text);
    const changePassword = text => setPassword(text);
    const changeIsAdmin = () => setIsAdmin(!isAdmin);
    const toggleIsPasswordHidden = () => setIsPasswordHidden(!isPasswordHidden);

    return {
        name,
        login,
        password,
        isAdmin,
        isPasswordHidden,
        changeName,
        changeLogin,
        changePassword,
        changeIsAdmin,
        toggleIsPasswordHidden,
    };
};
