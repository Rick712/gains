import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../routes';

import './app-view.css';

function AppView() {
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
