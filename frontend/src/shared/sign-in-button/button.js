import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class SignInButton extends Component {
    render() {
        return (
            <div className="SignInButton">
                <Button variant="dark">Sign In</Button>
            </div>
        );
    }
}

export default SignInButton;