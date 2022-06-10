import React, { Component } from 'react'
import { Form, Container, Row, Col } from 'react-bootstrap';
import './datepicker.css';
 
class DatePicker extends Component{
    render(){
        return(
            <Container className="DatePicker">
                <Row>
                    <Col></Col>
                    <Col>
                        <Form.Group className="datepicker-body">
                            <Col className="datepicker-label">
                                <Form.Label>{ this.props.category }</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control
                                    type="date"
                                    onChange={(e) => this.props.handleChange(e.target.value)}
                                />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}
 
export default DatePicker;