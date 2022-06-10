import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './add-button.css';

class AddButton extends Component {
    render() {
        return (
            <div className="AddButton">
                <Button
                    variant="success"
                    onClick={this.props.handleClick}>
                    { this.props.text }
                </Button>
            </div>
        );
    }
}

export default AddButton;