import React, { useEffect, useState } from "react";
import './dish-form.css'

import { Container, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

const DishForm = () => {
    const { register, handleSubmit } = useForm();
    const token = sessionStorage.getItem("token");
    const navigate = useNavigate();

    const { id } = useParams();
    const [dish, setDish] = useState({});
    
    useEffect(() => {
        if (id) {
            getDish(id);
        }
    }, []);

    const getDish = async(id) => {
        const response = await fetch(`https://tagalong-pos-db.herokuapp.com/dishes/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        const content = await response.json();
        setDish(content);
    }

    const onSubmit = async (data, e) => {
        console.log("Data: ", data);
        const endpoint = 'https://tagalong-pos-db.herokuapp.com/dishes/' + (id || 'create-dish');
        await fetch(endpoint, {
            method: id ? 'PUT' : 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(data)
        })
        .then(async res => { 
            const response = await console.log(res.json());
            console.log(response);
            navigate('/dishes');
        });
    }

    const onErrors = (errors, e) => {
        console.log("Errors: ", errors);
    }

    const dishForm = (
        <Form
            className="Dish-form-form"
            onSubmit={handleSubmit(onSubmit, onErrors)}>
            <Form.Group
                className="form-field mb-4"
                controlId="dish_name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    autoComplete="off"
                    {...register('dish_name', {
                        required: 'A name is required.'
                    })}
                    defaultValue={dish.dish_name}
                />
            </Form.Group>

            <Form.Group
                className="form-field mb-4"
                controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    type="text"
                    autoComplete="off"
                    {...register('description', {
                        required: 'Description is required.'
                    })}
                    defaultValue={dish.description}
                />
            </Form.Group>

            <Form.Group
                className="form-field mb-4"
                controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                    type="text"
                    autoComplete="off"
                    {...register('price', {
                        required: 'Price is required.'
                    })}
                    defaultValue={dish.price}
                />
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
        <Container className="new-dish-form-container">
            <h1>{id ? `Edit ${dish.dish_name}` : 'Add Dish'}</h1>

            { (dish || !id) ? dishForm : 'Loading...' }
        </Container>
    )
}

export default DishForm;