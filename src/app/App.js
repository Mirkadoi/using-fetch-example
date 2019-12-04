import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import Routers from '../routers';
import Firebase from '../components/Firebase';
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
                        <div className={styles.auth}>
                            <p>Авторизация:</p>
                            <Firebase setStateApp={this.setStateApp} />
                        </div>
                        <Routers setStateApp={this.setStateApp} />
                    </div>
                </Router>
            </div>
        );
    }
}

// App.propTypes = {
//     userData: PropTypes.func.isRequired,
// };

export default App;
