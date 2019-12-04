import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import Routers from '../routers';
import styles from './App.module.scss';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: null,
            userToken: null,
        };
    }

    setStateApp = (state, value) => {
        this.setState({ [state]: value });
    };

    render() {
        const { userData, userToken } = this.state;
        console.log(userData, userToken);

        return (
            <div className={styles.app}>
                <Router>
                    <div>
                        <Header setStateApp={this.setStateApp} />
                        <Routers />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
