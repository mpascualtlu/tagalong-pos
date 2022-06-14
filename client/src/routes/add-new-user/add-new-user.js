import React from "react";
import './add-new-user.css'
import LargeText from '../../shared/large-text/large-text';
import { Container, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddNewUser = () => {
    const { register, handleSubmit, errors } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data, e) => {
        console.log("Data: ", data);
        const response = await fetch(`http://localhost:4000/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        const content = await response.json();
        navigate('/admin-home');
    }

    const onErrors = (errors, e) => {
        console.log("Errors: ", errors);
    }

    return (
        <Container className="new-user-form-container">
            <h1>Add Users</h1>

            <Form
                className="add-new-user-form"
                onSubmit={handleSubmit(onSubmit, onErrors)}>
                <Form.Group
                    className="form-field mb-4"
                    controlId="first_name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        {...register('first_name', {
                            required: 'First name is required.'
                        })}
                    />
                </Form.Group>

                <Form.Group
                    className="form-field mb-4"
                    controlId="last_name">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        {...register('last_name', {
                            required: 'Last name is required.'
                        })}
                    />
                </Form.Group>

                <Form.Group
                    className="form-field mb-4"
                    controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        {...register('email', {
                            required: 'Email is required.'
                        })}
                    />
                </Form.Group>

                <Form.Group
                    className="form-field mb-4"
                    controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        {...register('password', {
                            required: 'Password is required.'
                        })}
                    />
                </Form.Group>

                <Form.Group
                    className="form-field mb-4"
                    controlId="role">
                    <Form.Control
                        as="select"
                        {...register('role', {
                            required: 'Role is required.'
                        })}>
                        <option>Role</option>
                        <option value="user">User</option>
                        <option value="employee">Employee</option>
                        <option value="admin">Admin</option>
                    </Form.Control>
                </Form.Group>

                <div class="btn-container">
                    <Button
                        type="submit"
                        variant="success">
                        Add
                    </Button>
                </div>
            </Form>
        </Container>
    )
}

export default AddNewUser;