import React, { useEffect, useState } from "react";
import './user-form.css'

import { Container, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

const UserForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const token = sessionStorage.getItem("token");
    const navigate = useNavigate();

    const { id } = useParams();
    const [user, setUser] = useState({});
    
    useEffect(() => {
        if (id) {
            getUser(id);
        }
    }, []);

    const getUser = async(id) => {
        const response = await fetch(`http://localhost:4000/users/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        const content = await response.json();
        setUser(content.user);
    }

    const onSubmit = async (data, e) => {
        const endpoint = 'http://localhost:4000/users/' + (id || 'register');
        await fetch(endpoint, {
            method: id ? 'PUT' : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => { 
            console.log(res.json());
            navigate(id ? '/users' : '/admin-home');
        });
    }

    const onErrors = (errors, e) => {
        console.log("Errors: ", errors);
    }

    const userForm = (
        <Form
            className="user-form-form"
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
                    defaultValue={user.first_name}
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
                    defaultValue={user.last_name}
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
                    defaultValue={user.email}
                />
            </Form.Group>

            <Form.Group
                className="form-field mb-4"
                controlId="role">
                <Form.Control
                    as="select"
                    {...register('role', {
                        required: 'Role is required.'
                    })}
                    defaultValue={user.role}>
                    <option isInvalid>Role</option>
                    <option value="user" selected={user && user.role === 'user'}>User</option>
                    <option value="employee" selected={user && user.role === 'employee'}>Employee</option>
                    <option value="admin" selected={user && user.role === 'admin'}>Admin</option>
                </Form.Control>
            </Form.Group>

            <div className="btn-container">
                <Button
                    type="submit"
                    variant="success">
                    Add
                </Button>
            </div>
        </Form>
    );

    return (
        <Container className="new-user-form-container">
            <h1>{id ? `Edit ${user.first_name} ${user.last_name}'s account` : 'Add User'}</h1>

            { (user || !id) ? userForm : 'Loading...' }
        </Container>
    )
}

export default UserForm;