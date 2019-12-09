import React from 'react';
import PropTypes from 'prop-types';
import FormInput from '../components/FormInput';
import styles from './UserProfile.module.scss';


const UserProfile = (props) => {
    const {
        userData,
        userToken,
    } = props;

    const renderUserInfo = () => {
        const {
            displayName,
            photoURL,
        } = userData;
        let name;

        if (displayName === null) {
            name = 'Безымянный';
        } else name = displayName;

        return (
            <div className={styles.profile}>
                <p>Приветствую {name}!</p>
                <img className={styles.avatar} src={photoURL} alt="Avatar" />
            </div>
        );
    };

    const renderUserInterface = () => {
        const params = {
            urlParam: '/user',
            method: 'PATCH',
            token: `${userToken}`,
        };
        return (
            <div className={styles.interface}>
                <FormInput
                    title="Сменить имя пользователя"
                    requestData={params}
                />
            </div>
        );
    };

    return (
        <>
            {
                userData !== null
                    ? (
                        <div className={styles.user}>
                            {renderUserInfo()}
                            {renderUserInterface()}
                        </div>
                    )
                    : (
                        <div className={styles.fail}>
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
    userData: PropTypes.shape({
        displayName: PropTypes.string,
        photoURL: PropTypes.string,
    }),
    userToken: PropTypes.string,
};

export default UserProfile;
