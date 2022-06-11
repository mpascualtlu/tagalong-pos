import React, { useState } from 'react';
import './sign-in.css';
import LargeText from '../../shared/large-text/large-text';

import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';

const SignIn = () => {
    const { register, handleSubmit, errors } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data, e) => {
        const response = await fetch('http://localhost:4000/users/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        const content = await response.json();
        sessionStorage.setItem('token', content.token);
        navigate('/admin-home');
    }

    const onErrors = (errors, e) => {
        console.log("Errors: ", errors);
        console.log("E: ", e);
    }

    return (
        <div className="SignIn">
            <Container>
                <LargeText text={"Sign in"}/>
                <div className="sign-in-form-container">
                    <Form className="sign-in-form p-3" onSubmit={handleSubmit(onSubmit, onErrors)}>
                        <Form.Group className="mb-3 mt-3" controlId="email">
                            <Form.Control
                                type="text"
                                name="email"
                                placeholder="Email"
                                autoComplete="off"
                                {...register('email', {
                                    required: 'Email is required.'
                                })}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Password"
                                autoComplete="off"
                                {...register('password', {
                                    required: 'Password is required.'
                                })}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Button
                                type="submit"
                                className="form-btn signin-button"
                                variant="info">
                                Sign in
                            </Button>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Button
                                className="form-btn registerButton"
                                variant="warning"
                                onClick={() => navigate('/register')}>
                                Register
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
            </Container>
        </div>
    )
}

export default SignIn;