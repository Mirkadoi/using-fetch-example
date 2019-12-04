import React, { Component } from 'react';
import app from 'firebase/app';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import PropTypes from 'prop-types';
import 'firebase/auth';
import 'firebase/firestore';
import styles from './Firebase.module.scss';
import Authorization from './Authorization';

const config = {
    apiKey: 'AIzaSyClnpYWbOSej7TSW7UTd9Xa1FNlbFtdS6A',
    authDomain: 'github-api-auth.firebaseapp.com',
    projectId: 'github-api-auth',
};

class Firebase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSignedIn: false,
        };

        this.appCoreInit = app.initializeApp(config);
        this.firestoreInit = this.appCoreInit.firestore();
        this.uiConfig = {
            signInFlow: 'popup',
            signInSuccessUrl: '/user',
            signInOptions: [
                {
                    provider: app.auth.GithubAuthProvider.PROVIDER_ID,
                    scopes: [
                        'user',
                        'public_repo',
                        'delete_repo',
                    ],
                },
            ],

            callbacks: {
                signInSuccessWithAuthResult: (authResult) => {
                    const { setStateApp } = props;

                    const token = authResult.credential.accessToken;
                    const data = authResult.user.providerData[0];
                    const id = authResult.user.uid;
                    setStateApp('userToken', token);
                    setStateApp('userData', data);
                    this.addTokenInBase(token, id);
                    return true;
                },
            },
        };
    }

    componentDidMount() {
        const { setStateApp } = this.props;

        this.unregisterAuthObserver = app.auth().onAuthStateChanged(
            (user) => {
                if (!user) return;
                setStateApp('userData', user);
                this.firestoreInit
                    .collection('users')
                    .doc(`${user.uid}`)
                    .get()
                    .then((db) => {
                        setStateApp('userToken', db.data().token);
                        this.handelSignedIn(true);
                    });
            },
        );
    }

    componentWillUnmount() {
        this.unregisterAuthObserver();
    }

    handelSignedIn = (value) => {
        this.setState({ isSignedIn: value });
        localStorage.setItem('isSignedIn', `${value}`);
    };

    addTokenInBase = (token, id) => this.firestoreInit
        .collection('users')
        .doc(`${id}`)
        .set({
            name: `Tecт${Math.random()}`,
            token: `${token}`,
        });

    render() {
        const { isSignedIn } = this.state;
        const { history: { push: logout } } = this.props;

        return (
            isSignedIn
                ? (
                    <>
                        <Authorization>
                            <Button
                                className={styles.button}
                                variant="dark"
                                onClick={() => logout('/')}
                            >
                                Главная
                            </Button>
                            <Button
                                className={styles.button}
                                variant="dark"
                                onClick={() => logout('/user')}
                            >
                                Пользователь
                            </Button>
                            <Button
                                className={styles.button}
                                variant="dark"
                                onClick={() => app
                                    .auth()
                                    .signOut()
                                    .then(() => {
                                        this.handelSignedIn(false);
                                        logout('/');
                                    })}
                            >
                                Выход
                            </Button>
                        </Authorization>

                    </>
                )
                : (
                    <div>
                        <StyledFirebaseAuth
                            uiConfig={this.uiConfig}
                            firebaseAuth={app.auth()}
                        />
                    </div>
                )
        );
    }
}

Firebase.defaultProps = {
    setStateApp: () => {},
    push: () => {},
};

Firebase.propTypes = {
    history: PropTypes.shape().isRequired,
    push: PropTypes.func,
    setStateApp: PropTypes.func,
};

export default withRouter(Firebase);
