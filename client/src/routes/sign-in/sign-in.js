import React, { useState } from 'react';
import './sign-in.css';
import LargeText from '../../shared/large-text/large-text';
import AddButton from '../../shared/add-button/add-button';
import InputField from '../../shared/input-field/input-field';
import EncourageButton from '../../shared/encourage-button/button';
import { Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');

    const navigate = useNavigate();

    return (
        <div className="SignIn">
            <Container>
                <LargeText text={"Sign in"}/>
                <div class="sign-in-form">
                    <Form>
                        <Form.Group className="m-3">
                            <InputField
                                text={'Email'}
                                handleChange={changeEmail}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <InputField
                                text={'Password'}
                                handleChange={changePassword}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <AddButton
                                text={'Sign in'}
                                className="justSignIn"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <AddButton
                                text={'Register'}
                                className="registerButton"
                                handleClick={() => navigate('/register')}
                            />
                        </Form.Group>
                    </Form>
                </div>
            </Container>
        </div>
    )
}

export default SignIn;