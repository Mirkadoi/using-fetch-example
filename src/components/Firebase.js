import React from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const Firebase = ({ setState }) => {
    const config = {
        apiKey: 'AIzaSyClnpYWbOSej7TSW7UTd9Xa1FNlbFtdS6A',
        authDomain: 'github-api-auth.firebaseapp.com',
    };

    firebase.initializeApp(config);

    const uiConfig = {
        signInFlow: 'popup',
        signInSuccessUrl: '/user',
        signInOptions: [
            {
                provider: firebase.auth.GithubAuthProvider.PROVIDER_ID,
                scopes: [
                    'user',
                    'public_repo',
                    'delete_repo',
                ],
            },
        ],

        callbacks: {
            signInSuccessWithAuthResult: (authResult) => {
                setState('userData', authResult);
                return true;
            },
        },
    };

    return (
        <div>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
    );
};

export default Firebase;
