import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import Home from './page/Home';
import UserProfile from './page/UserProfile';

const Routers = (props) => (
    <Switch>
        <Route
            exact
            path="/"
            render={() => <Home />}
        />
        <Route
            exact
            path="/user"
            render={() => <UserProfile {...props} />}
        />
    </Switch>
);

export default Routers;
