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

    const checkIns = (
        <Container className="container-itemsList">
            <Row>
                <Col> Arushi Fathima </Col>
                <Col> Backpacker's Hostel </Col>
            </Row>
            <Row>
                <Col> Chand Varsha </Col>
                <Col>Tag Along 2.0</Col>
            </Row>
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
            
            <div class="btn-container"> 
                <Button
                    variant="primary"
                    onClick={() => navigate('/add-new-user')}>
                    Add User
                </Button>
            </div>
        </div>
    );

    const cafeManagement = (
        <div class="hostel-container">
            <h1>Cafe Management</h1>
        
            <Container>
                <Row>
                    <Col>
                        <Button variant="primary">
                            Add order
                        </Button>
                    </Col>
                    <Col class="col">
                        <Button variant="dark">
                            Edit Menu
                        </Button>
                    </Col>
                </Row>
            </Container>
            
            <Container>
                <Row>
                    <Col>
                        <div class="black-container">
                            Today: 10,000 INR
                        </div> 
                    </Col>
                    <Col>
                        <div class="black-container">
                            Last 28 days: 1,00,000 INR
                        </div> 
                    </Col>
                </Row>

                <Container>
                    <Row>
                        <Col>
                            <div class="container-items">
                                <h2>Recent Orders</h2>

                                <div class="container-itemsList">
                                    <div class="row ">
                                        <div class="col">
                                            31/12/2022
                                        </div>
                                        <div class="col">
                                            The Travel Cafe
                                        </div>
                                        <div class="col">
                                            -155 INR 
                                        </div>
                                    </div>

                                    <div class="container-itemsList">
                                        <div class="row ">
                                            <div class="col">
                                                <span>31/12/2022</span> 
                                            </div>
                                            <div class="col">
                                                <span>The Travel Cafe</span> 
                                            </div>
                                            <div class="col">
                                                <span>-55 INR</span> 
                                            </div>
                                        </div>

                                        <div class="container-itemsList">
                                            <div class="row ">
                                                <div class="col">
                                                    <span>25/12/2022</span> 
                                                </div>
                                                <div class="col">
                                                    <span>Tag Along 2.0</span> 
                                                </div>
                                                <div class="col">
                                                    <span>-100 INR</span> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
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