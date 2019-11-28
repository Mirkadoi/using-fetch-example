import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Home from './page/Home';
import Authorization from './page/Authorization';
import UserProfile from './page/UserProfile';

const Routers = (props) => {
    const { setState } = props;
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home setState={setState} />
                    </Route>
                    {/*<Route path="/auth" component={Authorization} />*/}
                    <Route path="/user">
                        <UserProfile setState={setState} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Routers;
