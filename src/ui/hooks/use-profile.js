import axios from 'axios';
import { useState, useCallback, useContext } from 'react';

import { LOGINAPI } from '../../variables';

import { UserContext } from '../context/profileContext';

export const useProfile = (username, password) => {
    const { user, setUser } = useContext(UserContext);

    const [loginLoading, setLoginLoading] = useState(false);
    const [loginErrors, setLoginErrors] = useState(null);

    const validateLogin = useCallback(async (username, password) => {
        setLoginLoading(true);

        axios
            .post(LOGINAPI, {
                username: username,
                password: password,
            })
            .then((res) => {
                console.log(res);
                setUser({
                    name: res.data.user_nicename,
                    email: res.data.user_username,
                    token: res.data.token,
                });
                localStorage.setItem('validation_token', res.data.token);
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
            })
            .catch((error) => {
                setLoginErrors(error);
            });
        setLoginLoading(false);
    });

    return {
        validateLogin,
        loginErrors,
        loginLoading,
    };
};
