import React from 'react';
import Firebase from '../components/Firebase';
import styles from './Home.module.scss';
// import PropTypes from 'prop-types';

const Home = ({ setState }) => (
    <div className={styles.container}>
        <p>Главная страница</p>
        <p>Авторизация:</p>
        <Firebase setState={setState} />
    </div>
);

// Home.propTypes = {

// };

export default Home;
