import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormInput from '../components/FormInput';
import styles from './UserProfile.module.scss';
import RequestToApi from '../requestToApi';


const UserProfile = (props) => {
    const [userName, setName] = useState('Друг');
    const {
        userData,
        userToken,
    } = props;

    let params = {
        urlParam: '/user',
        token: `${userToken}`,
    };

    const renderUserInfo = () => {
        params = { ...params, method: 'GET' };
        const {
            photoURL,
        } = userData;

        if (userToken) {
            RequestToApi(params).then(({ name }) => {
                setName(name);
            });
        }

        return (
            <div className={styles.profile}>
                <p>Приветствую { userName }!</p>
                <img className={styles.avatar} src={photoURL} alt="Avatar" />
            </div>
        );
    };

    const renderUserInterface = () => {
        params = { ...params, method: 'PATCH' };
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
