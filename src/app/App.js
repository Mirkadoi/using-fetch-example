import React, { Component } from 'react';
import './App.scss';
import Routers from '../routers';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: null,
            userToken: null,
        };
    }

    setState = (state, value) => {
        this.setState({ [state]: value });
    };

    render() {
        // const { showAuth } = this.state;
        return (
            <div className="App">
                <Routers setState={this.setState} />
            </div>
        );
    }
}
export default App;
