import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {
    Modal,
    Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './AuthWindow.module.scss';

const AuthWindow = (props) => {
    const { onHide, show, backdrop } = props;
    return (
        <Modal
            show={show}
            onHide={onHide}
            backdrop={backdrop}
            dialogClassName="modal-90w"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Авторизация с GitHub
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Форма
                </p>
            </Modal.Body>
            <Modal.Footer bsPrefix={cn('modal-footer', styles.footer)}>
                <p>Тестовый акаунт</p>
                <Button variant="primary" onClick={onHide}>Авторизоваться</Button>
            </Modal.Footer>
        </Modal>
    );
};

AuthWindow.defaultProps = {
    backdrop: '',
};

AuthWindow.propTypes = {
    onHide: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    backdrop: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
    ]),
};

export default AuthWindow;
