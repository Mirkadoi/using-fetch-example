import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserProfile.module.scss';

const UserProfile = (props) => {
    const {
        userData,
        userToken,
    } = props;

    const writeText = () => {
        const {
            displayName,
            photoURL,
        } = userData;
        let name;

        if (displayName === null) {
            name = 'Безымянный';
        } else name = displayName;

        console.log(userToken);

        return (
            <div className={styles.profile}>
                <p>Приветствую {name}!</p>
                <img className={styles.avatar} src={photoURL} alt="Avatar" />
            </div>
        );
    };

    return (
        <>
            {
                userData !== null
                    ? writeText()
                    : (
                        <div>
                            404 - такого пользователя нет
                        </div>
                    )
            }
        </>
    );
};

UserProfile.defaultProps = {
    userData: {
        displayName: '',
        photoURL: '',
    },
    userToken: null,
};

UserProfile.propTypes = {
    userData: PropTypes.objectOf({
        displayName: PropTypes.string,
        photoURL: PropTypes.string,
    }),
    userToken: PropTypes.string,
};

export default UserProfile;
