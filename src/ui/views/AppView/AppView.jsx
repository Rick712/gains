import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { UserContext } from '../../context/profileContext';

import { routes } from '../../routes';
import { paths } from '../../paths';

import './app-view.css';

function AppView() {
    const history = useHistory();

    const localValidationToken = localStorage.getItem('validation_token');

    if (!localValidationToken) {
        console.log('jallah');
        history.push(paths.login);
    }

    return (
        <Suspense>
            <Switch>
                {routes.map((route) => {
                    const Component = route.component;
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            render={(props) => <Component {...props} />}
                            exact={route.exact}
                        />
                    );
                })}
            </Switch>
        </Suspense>
    );
}

export default AppView;
