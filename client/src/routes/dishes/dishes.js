import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './dishes.css';
import { Table, Button } from 'react-bootstrap';


const Dishes = () => {
    const token = sessionStorage.getItem("token");
    const [dishes, setDishesList] = useState([]);
    const navigate = useNavigate();

    const getDishes = async () => {
        setDishesList([]);
        const response = await fetch(`https://tagalong-pos-db.herokuapp.com/dishes`, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        try {
            const usersResponse = await response.json();
            console.log(usersResponse);
            setDishesList(usersResponse);
        }
        catch {
            console.log("Error");
        }
    }

    useEffect(() => {
        getDishes();
    }, []);

    const deleteDish = async(dish) => {
        if (dish) {
            await fetch(`https://tagalong-pos-db.herokuapp.com/dishes/${dish.id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            })
            .then(() => {
                getDishes();
            })
            .catch(err => {
                console.log("Error: ", err);
            })
        }
    }

    return (
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th></th>
                    <th>
                        <Button
                            variant="success"
                            onClick={() => navigate('/dish-form')}>
                                Create new dish
                        </Button>
                    </th>
                </tr>
            </thead>
            <tbody>
                { dishes.map((dish, index) => {
                    return (
                        <tr key={index}>
                            <td>{dish.dish_name}</td>
                            <td>{dish.description}</td>
                            <td>{dish.price}</td>
                            <td>
                                <Button
                                    variant="info"
                                    onClick={() => navigate(`/dish-form/${dish.id}`)}>Edit</Button>
                            </td>
                            <td>
                                <Button
                                    variant="danger"
                                    onClick={() => deleteDish(dish)}>Delete</Button>
                            </td>
                        </tr>
                    );
                }) }
            </tbody>
        </Table>
    );
}

export default Dishes;