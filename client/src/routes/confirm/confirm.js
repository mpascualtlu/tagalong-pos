import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './confirm.css';

const Confirm = () => {
    const navigate = useNavigate();
    
    return (
        <div className="Confirm">
            <Container className="confirmation-container">
                <h1>Thank you for booking with us. Please look out for an email for your confirmation</h1>
            </Container>
            <Row className="after-confirmation-buttons">
                <Col></Col>
                <Col>
                    <Button
                        className="after-confirmation-btn your-account"
                        onClick={() => navigate('/')}>
                        Your Account
                    </Button>
                </Col>
                <Col>
                    <Button
                        className="after-confirmation-btn go-home"
                        onClick={() => navigate('/')}>
                        Go Home
                    </Button>
                </Col>
                <Col></Col>
            </Row>
        </div>
    )
}

export default Confirm;