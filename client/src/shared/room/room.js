import React, { Component } from 'react';
import './room.css';
import { Container, Row, Col } from 'react-bootstrap';
import AddButton from '../add-button/add-button';

const Room = (props) => {
    return (
        <div className="Room">
            <Container>
                <Row>
                    <Col>
                        <img
                            className="room-img"
                            src={process.env.PUBLIC_URL + props.roomImage}
                            alt={props.roomName}
                        />
                    </Col>
                    <Col className="room-details">
                        <div>
                            <h1>{props.roomName || ''}</h1>
                            <h3>{props.description || ''}</h3>
                        </div>
                        <h2>{props.nightlyPrice || ''} INR/Night</h2>
                        <div className="add-to-basket">
                            <h3>Add beds to basket:</h3>
                            <input
                                type="number"
                                onChange={(e) => props.handleChange(e.target.value, props)}
                            />
                        </div>
                        <AddButton
                            text="Confirm"
                            handleClick={() => props.handleClick(props)}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
} 

export default Room;