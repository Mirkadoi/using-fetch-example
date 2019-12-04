import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import Home from './page/Home';
import UserProfile from './page/UserProfile';

const Routers = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user" component={UserProfile} />
    </Switch>
);

export default Routers;
