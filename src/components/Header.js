import React from 'react';
import PropTypes from 'prop-types';
import Firebase from './Firebase';
import styles from './Header.module.scss';

const Header = ({ setStateApp }) => (
    <div className={styles.auth}>
        <p>Авторизация:</p>
        <Firebase setStateApp={setStateApp} />
    </div>
);

Header.propTypes = {
    setStateApp: PropTypes.func.isRequired,
};

export default Header;
