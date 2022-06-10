import React, { useState } from 'react';
import './register.css';
import { Container, Row, Col } from 'react-bootstrap';

import LargeText from '../../shared/large-text/large-text';

import FirstStep from './steps/first-step/first-step';
import SecondStep from './steps/second-step/second-step';
import ThirdStep from './steps/third-step/third-step';

const Register = () => {
    const [firstName, changeFirstName] = useState('');
    const [lastName, changeLastName] = useState('');

    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');
    const [confirmPassword, changePasswordConfirmation] = useState('');

    const [step, changeStep] = useState(0);

    const progress = (
        <React.Fragment>

        </React.Fragment>
    );

    const renderSwitch = (currentStep) => {
        switch(currentStep) {
            case 0:
                return <FirstStep/>
            case 1:
                return <SecondStep/>
            default:
                return <ThirdStep/>
        }
    }

    return (
        <div className="register">
            <Container>
                <Row>
                    <LargeText
                        text={"Register"}
                        progress={progress}
                    />
                </Row>
            </Container>
            { 
                renderSwitch(step)
            }
        </div>
    )
}

export default Register;