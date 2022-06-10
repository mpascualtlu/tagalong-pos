import React, { useRef, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import EncourageButton from '../../shared/encourage-button/button';
import './review.css';
import { useNavigate } from 'react-router-dom';
import AddButton from '../../shared/add-button/add-button';

const Review = () => {
    const location = useLocation();
    const currentOrder = location.state.currentOrder;

    const navigate = useNavigate();

    const goToConfirmationScreen = () => {
        navigate('/confirm');
    }

    return (
        <div className="Review">
            <h1>Review</h1>
            <Container className="review-container">
                <Row>
                <Col className="review-label">
                    Hostel: 
                </Col>
                <Col>
                    { currentOrder.hostelName }
                </Col>
                </Row>
                <Row>
                    <Col className="review-label">
                        Check-in Date: 
                    </Col>
                    <Col>
                        { location.state.checkInDate }
                    </Col>
                </Row>
                <Row>
                    <Col className="review-label">
                        Check-out Date: 
                    </Col>
                    <Col>
                        { location.state.checkOutDate }
                    </Col>
                </Row>
                <Row>
                    <Col className="review-label">
                        Room: 
                    </Col>
                    <Col>
                        { currentOrder.roomName } - { currentOrder.roomDescription }
                    </Col>
                </Row>
                <Row>
                    <Col className="review-label">
                        Beds: 
                    </Col>
                    <Col>
                        { currentOrder.numOfBeds }
                    </Col>
                </Row>
                <div className="book-button-container">
                    <AddButton text="Book" handleClick={goToConfirmationScreen}/>
                </div>
            </Container>
        </div>
    );
}

export default Review;