import React, { Component } from 'react';
import './App.scss';
import Routers from '../routers';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // showAuth: true,
        };
    }

    // setShowAuth = () => {
    //     this.setState({ showAuth: false });
    // };

    render() {
        // const { showAuth } = this.state;
        return (
            <div className="App">
                <Routers />
            </div>
        );
    }
}
export default App;
