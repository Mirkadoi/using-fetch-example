import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import PropTypes from 'prop-types';

const Authorization = props => {
    return (
        <div>
            <Button variant="primary" onClick={onHide}>Авторизоваться</Button>
        </div>
    );
};

// Authorization.propTypes = {
//
// };

export default Authorization;
