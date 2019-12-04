import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './page/Home';
// import Authorization from './page/Authorization';
import UserProfile from './page/UserProfile';

const Routers = (props) => {
    const { setStateApp } = props;

    return (
        <Switch>
            <Route exact path="/" render={() => <Home setState={setStateApp} />} />
            {/* <Route path="/auth" component={Authorization} /> */}
            <Route path="/user">
                <UserProfile setState={setStateApp} />
            </Route>
        </Switch>
    );
};

Routers.defaultProps = {
    setStateApp: () => {
    },
};

Routers.propTypes = {
    setStateApp: PropTypes.func,
};

export default Routers;
