import axios from 'axios';
import { useState, useCallback, useContext } from 'react';

import { LOGINAPI } from '../../variables';

import { UserContext } from '../context/profileContext';

export const useProfile = (email, password) => {
    const { user, setUser } = useContext(UserContext);

    const [loginValidate, setLoginValidate] = useState(null);
    const [loginLoading, setLoginLoading] = useState(false);
    const [loginErrors, setLoginErrors] = useState(null);

    const validateLogin = useCallback(async (email, password) => {
        setLoginLoading(true);

        axios
            .post(LOGINAPI, {
                username: email,
                password: password,
            })
            .then((res) => {
                console.log(res);
                setUser({
                    name: res.data.user_nicename,
                    email: res.data.user_email,
                    token: res.data.token,
                });
                localStorage.setItem('validation_token', res.data.token);
            })
            .catch((error) => {
                console.log(error);
            });
        setLoginLoading(false);
    });

    return {
        validateLogin,
        setLoginErrors,
        loginLoading,
        loginValidate,
    };
};
