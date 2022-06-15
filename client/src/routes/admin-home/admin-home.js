import React from "react";
import './admin-home.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AdminHome = () => {
    const navigate = useNavigate();

    const hotels = (
        <Container>
            <Row>
                <Col>
                    <Button
                        type="button"
                        className="btn-whiteBorder">
                            Backpacker's Hostel
                    </Button> 
                </Col>
                <Col>
                    <Button
                        type="button"
                        className="btn-whiteBorder">
                        Tag Along 2.0
                    </Button>
                </Col>
            </Row>
        </Container>
    );

    const todaysCheckIn = (
        <Container className="checkin-container">
            <h2>Today's check-ins</h2>

        </Container>
    )

    const hostelIncome = (
        <div></div>
        // <Container className="hostel-income-container">
        //     <Row>
        //         <Col>
        //             <div class="black-container">
        //                 Today: 10,000 INR
        //             </div> 
        //         </Col>
        //         <Col class="col">
        //             <div class="black-container">
        //                 Last 28 days: 1,00,000 INR
        //             </div> 
        //         </Col>
        //         <Col class="col">
        //             <div class="black-container">
        //                 Remaining: 1,00,000 INR
        //             </div> 
        //         </Col>
        //     </Row>
        // </Container>
    )

    const hotelManagement = (
        <div className="hostel-container">
            <h1>Hostel Bookings</h1>

            { hotels }
            { todaysCheckIn }
            { hostelIncome }
            
            <div className="btn-container"> 
                <Button
                    variant="primary"
                    onClick={() => navigate('/user-form')}>
                    Add User
                </Button>
                <Button
                variant="success"
                    onClick={() => navigate('/users')}>
                    See all users
                </Button>
            </div>
        </div>
    );

    const cafeManagement = (
        <div className="hostel-container">
            <h1>Cafe Management</h1>
        
            <Container>
                <Row>
                    <Col>
                        <Button variant="primary">
                            Add dish
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            variant="dark"
                            onClick={() => navigate('/dishes')}>
                            Get list of dishes
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )

    return (
        <div>
            { hotelManagement }
            { cafeManagement }
        </div>
    );
}

export default AdminHome;