import React from "react";
import './request-new-password.css';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import LargeText from "../../../../shared/large-text/large-text";

const RequestNewPassword = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log("Data: ", data);
    }

    const onErrors = (errors) => {
        console.log("Errors: ", errors);
    }

    return (
        <Container className="password-recovery-container">
            <Form className="p-3" onSubmit={handleSubmit(onSubmit, onErrors)}>
                <LargeText text={"Request New Password"}/>
                <Form.Group className="m-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        autoComplete="off"
                        {...register('email', {
                            required: 'Email is required.'
                        })}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="m-3">
                    <Button type="submit">Send confirmation</Button>
                </Form.Group>
            </Form>
        </Container>
    );
}

export default RequestNewPassword;
