import React, { useEffect, useState } from "react";
import './users.css';
import { Table } from 'react-bootstrap';

const Users = () => {
    const [users, getUsers] = useState([]);
    const token = sessionStorage.getItem("token");

    const formattedUsers = [];

    const getData = async () => {
        const response = await fetch(`https://tagalong-pos-db.herokuapp.com/users`, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        
        getUsers(await response.json());
        users.forEach(user => {
            formattedUsers.push(<tr>
                <td>{ user.first_name }</td>
                <td>{ user.last_name }</td>
                <td>{ user.email }</td>
                <td>{ user.role }</td>
            </tr>);
            console.log("Formatted users: ", formattedUsers);
        })
    }

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        const getData = async () => {
            const callMyApi = await fetch(`https://tagalong-pos-db.herokuapp.com/users`, {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            })
        }
    })

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
                </tr>
            </thead>
            <tbody>
                { formattedUsers }
            </tbody>
            </Table>
        </div>
    )
}

export default Users;