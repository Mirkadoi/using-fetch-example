import React, { Component } from 'react';
import './App.scss';
import UserProfile from '../components/UserProfile';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showAuth: true,
        };
    }

    setShowAuth = () => {
        this.setState({ showAuth: false });
    };

    render() {
        const { showAuth } = this.state;
        return (
            <div className="App">
                { !showAuth && <UserProfile /> }
            </div>
        );
    }
}
export default App;
