import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import RequestToApi from '../requestToApi';
import updateDataBase from '../utils/updateDataBase';

const FormInput = (props) => {
    const {
        title,
        type,
        requestData,
    } = props;

    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { value, name } = inputRef.current;
        if (value === '') return alert('Давай хоть пару букв');

        const body = { [name]: value };
        RequestToApi({ ...requestData, body }).then(() => alert('Имя успешно изменено'));
        return updateDataBase();
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>{title}</Form.Label>
                    <Form.Control ref={inputRef} name="name" type={type} />
                    <Button type="submit">Отправить</Button>
                </Form.Group>
            </Form>
        </>
    );
};

FormInput.defaultProps = {
    title: 'Текст',
    type: 'input',
    requestData: {},
};

FormInput.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    requestData: PropTypes.shape(),
};

export default FormInput;
