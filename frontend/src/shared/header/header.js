import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './header.css';
import SignInButton from '../sign-in-button/button';
import companyLogo from '../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return (
        <Container className="Header" fluid>
            <Row>
                <Col>
                    <Row>
                        <Col xs={2}>
                            <img
                                src={ companyLogo }
                                alt="Tag Along"
                                className="logo"
                                onClick={() => navigate('/')}/>
                        </Col>
                        <Col></Col>
                    </Row>
                </Col>
                <Col>
                    <Row className="Options">
                        <Col>About</Col>
                        <Col>Trips</Col>
                        <Col onClick={() => navigate('/hostels')}>Hostels</Col>
                        <Col>Contact</Col>
                        <Col xs={4}>
                            <SignInButton/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;