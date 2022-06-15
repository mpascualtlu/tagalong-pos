import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './users.css';
import { Table, Button, Modal, Form } from 'react-bootstrap';


const Users = () => {
    const token = sessionStorage.getItem("token");
    const [users, setUserList] = useState([]);
    const navigate = useNavigate();

    const getUsers = async () => {
        setUserList([]);
        const response = await fetch(`https://tagalong-pos-db.herokuapp.com/users`, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        try {
            const usersResponse = await response.json();
            console.log(usersResponse);
            setUserList(usersResponse);
        }
        catch {
            console.log("Error");
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    const deleteUser = async(user) => {
        const response = await fetch(`https://tagalong-pos-db.herokuapp.com/${user.id}`, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
    }

    return (
        <div>
            <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { users.map((user, index) => {
                    return (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <Button onClick={() => navigate(`/user-form/${user.id}`)}>Edit</Button>
                            </td>
                            <td>
                                <Button onClick={() => deleteUser(user)}>Delete</Button>
                            </td>
                        </tr>
                    );
                }) }
            </tbody>
            </Table>

        </div>
    )
}

export default Users;