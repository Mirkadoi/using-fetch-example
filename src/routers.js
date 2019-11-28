import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Home from './page/Home';
import Authorization from './page/Authorization';
import UserProfile from './page/UserProfile';

const Routers = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/auth" component={Authorization} />
                <Route path="/user" component={UserProfile} />
            </Switch>
        </div>
    </Router>
);

export default Routers;
