import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Authorization.module.scss';

const Authorization = ({ children }) => (
    <div className={styles.container}>
        { children }
    </div>
);


Authorization.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Authorization;
