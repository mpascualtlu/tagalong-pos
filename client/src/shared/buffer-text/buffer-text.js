import React, { Component } from 'react';
import './buffer-text.css';
import { Container, Row, Col } from 'react-bootstrap';

class BufferText extends Component {
    render() {
        return (
            <div className="BufferText">
                <h1>{this.props.header}</h1>  
                <Container className="main-text">
                    <Row>
                        <Col xs={2}></Col>
                        <Col>
                            <p>{this.props.text}</p>
                        </Col>
                        <Col xs={2}></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default BufferText;