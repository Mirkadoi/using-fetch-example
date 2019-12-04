import React from 'react';
import PropTypes from 'prop-types';
import Firebase from '../components/Firebase';
import styles from './Home.module.scss';

const Home = ({ setStateApp }) => (
    <div className={styles.container}>
        <p>Главная страница</p>
        <p>Авторизация:</p>
        <Firebase setStateApp={setStateApp} />
    </div>
);

Home.defaultProps = {
    setStateApp: () => {},
};

Home.propTypes = {
    setStateApp: PropTypes.func,
};

export default Home;
