import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useProfile } from '../../hooks/use-profile';
import { UserContext } from '../../context/profileContext';
import { paths } from '../../paths';

import { Button } from '../../components';

export default function Login() {
    const history = useHistory();
    const { validateLogin, loginErrors } = useProfile();
    const { user } = useContext(UserContext);
    const localValidationToken = localStorage.getItem('validation_token');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleInput = (data: string, target: (data: string) => void) => {
        target(data);
    };

    const handleClick = () => {
        validateLogin(username, password);
    };

    if (localValidationToken) {
        history.push(paths.home);
    }

    useEffect(() => {
        if (user.token) {
            history.push(paths.home);
        }
    }, [user, history]);

    return (
        <div className={`login container ${loginErrors && 'error'}`}>
            <div className="content">
                <h1>Login bij Gains</h1>
                <input
                    value={username}
                    type="text"
                    onChange={(e) => handleInput(e.target.value, setUsername)}
                />
                <input
                    value={password}
                    type="password"
                    onChange={(e) => handleInput(e.target.value, setPassword)}
                />

                {loginErrors && <p>{loginErrors}</p>}

                <Button className="send">
                    <div onClick={handleClick}>Stuur</div>
                </Button>
            </div>
        </div>
    );
}
