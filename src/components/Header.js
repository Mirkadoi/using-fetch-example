import React from 'react';
import PropTypes from 'prop-types';
import Firebase from './Firebase';
import styles from './Header.module.scss';

const Header = ({ setStateApp, appCoreInit }) => (
    <div className={styles.auth}>
        <p>Авторизация:</p>
        <Firebase setStateApp={setStateApp} appCoreInit={appCoreInit} />
    </div>
);

Header.propTypes = {
    setStateApp: PropTypes.func.isRequired,
    appCoreInit: PropTypes.shape().isRequired,
};

export default Header;
