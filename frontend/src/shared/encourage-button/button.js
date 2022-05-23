import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './button.css';

class EncourageButton extends Component {
    render() {
        return (
            <div className="Encourage">
                <Button
                    variant="warning"
                    onClick={this.props.handleClick}>
                        { this.props.text }
                </Button>
            </div>
        );
    }
}

export default EncourageButton;