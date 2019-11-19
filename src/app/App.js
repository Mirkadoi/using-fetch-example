import React, { Component } from 'react';
import './App.scss';
import AuthWindow from '../components/AuthWindow';
import UserProfile from '../components/UserProfile';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showAuth: true,
        };
    }

    componentDidMount() {

    }

    setShowAuth = () => {
        this.setState({ showAuth: false });
    };

    render() {
        const { showAuth } = this.state;
        return (
            <div className="App">
                <AuthWindow show={showAuth} onHide={this.setShowAuth} backdrop="static" />
                { !showAuth && <UserProfile /> }
            </div>
        );
    }
}
export default App;
