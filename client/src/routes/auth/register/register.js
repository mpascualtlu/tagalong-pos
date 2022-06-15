import React, { useState } from 'react';
import './register.css';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import LargeText from '../../../shared/large-text/large-text';

const Register = () => {
    const { register, handleSubmit, errors } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data, e) => {
        data.role = 'admin';
        const response = await fetch(`http://localhost:4000/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        const content = await response.json();
        sessionStorage.setItem('token', content.token);
        console.log("New user: ", content);
    }

    const onErrors = (errors, e) => {
        console.log("Errors: ", errors);
        console.log("E: ", e);
    }

    return(
        <Container>
            <LargeText text={"Register"}/>
            <Form onSubmit={handleSubmit(onSubmit, onErrors)}>
                <Form.Group className="mb-3 mt-3" controlId="first_name">
                    <Form.Control
                        type="text"
                        name="first_name"
                        placeholder="First name"
                        autoComplete="off"
                        required
                        {...register('first_name', {
                            required: 'First name is required.'
                        })}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3 mt-3" controlId="last_name">
                    <Form.Control
                        type="text"
                        name="last_name"
                        placeholder="First name"
                        autoComplete="off"
                        required
                        {...register('last_name', {
                            required: 'Last name is required.'
                        })}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3 mt-3" controlId="email">
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Email"
                        autoComplete="off"
                        required
                        {...register('email', {
                            required: 'Email is required.'
                        })}>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                        Please choose a username.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3 mt-3" controlId="password">
                    <Form.Control
                        type="password"
                        name="first_name"
                        placeholder="Password"
                        autoComplete="off"
                        required
                        {...register('password', {
                            required: 'First name is required.'
                        })}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mt-3 mb-3">
                    <Button
                        type="submit"
                        className="form-btn signin-button"
                        variant="info">
                        Register
                    </Button>
                </Form.Group>
            </Form>
        </Container>
    );
}

export default Register;