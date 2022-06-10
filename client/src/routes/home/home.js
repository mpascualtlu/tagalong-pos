import React, { useState } from 'react';
import './home.css';
import DisplaySection from '../../shared/display-section/display-section';
import { Container, Row, Col } from 'react-bootstrap';
import LargeSelectionOption from '../../shared/large-selection-option/option';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [buttonIsClicked, clickButton] = useState(false);
    const navigate = useNavigate();

    const getStarted = () => clickButton(true);

    if (!buttonIsClicked) {
        return (
            <div className="Home">
                <DisplaySection
                    largeText="Breathe. Smile. Repeat"
                    buttonText="Get Started"
                    imageName="/images/heroImage.jpg"
                    handleClick={getStarted}
                />
            </div>
        );
    } else {
        return (
            <Container className="option-container">
                <Row>
                    <Col
                        className="option-holder"
                        onClick={() => navigate('/hostels')}>
                        <LargeSelectionOption text="Tag Along Hostels" isLeft={true}/>
                    </Col>
                    <Col className="option-holder">
                        <LargeSelectionOption text="Trips" isLeft={false}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;