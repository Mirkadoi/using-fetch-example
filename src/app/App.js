import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import app from 'firebase/app';
import Header from '../components/Header';
import Routers from '../routers';
import styles from './App.module.scss';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
};

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: null,
            userToken: null,
            appCoreInit: app.initializeApp(config),
        };
    }

    setStateApp = (state, value) => {
        this.setState({ [state]: value });
    };

    render() {
        const { userData, userToken, appCoreInit } = this.state;

        return (
            <div className={styles.app}>
                <Router>
                    <Header setStateApp={this.setStateApp} appCoreInit={appCoreInit} />
                    <Routers
                        userData={userData}
                        userToken={userToken}
                    />
                </Router>
            </div>
        );
    }
}

export default App;
