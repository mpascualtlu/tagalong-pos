import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SignInButton = () => {
    const navigate = useNavigate();
    return (
        <div className="SignInButton">
            <Button onClick={() => navigate('sign-in')} variant="dark" >Sign In</Button>
        </div>
    );
}

export default SignInButton;