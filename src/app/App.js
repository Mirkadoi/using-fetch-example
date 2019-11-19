import React, { Component } from 'react';
import './App.scss';
import UserProfile from '../components/UserProfile';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // showAuth: true,
        };
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="App">

                {/* showAuth && */}

                <UserProfile />
            </div>
        );
    }
}
export default App;
