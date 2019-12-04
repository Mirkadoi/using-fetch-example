import React, { Component } from 'react';
import './App.scss';
// import PropTypes from 'prop-types';
import Routers from '../routers';


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
            <div className="App">
                <Routers setStateApp={this.setStateApp} />
            </div>
        );
    }
}

// App.propTypes = {
//     userData: PropTypes.func.isRequired,
// };

export default App;
