import React, { Component } from 'react';
import './large-text.css';

const LargeText = (props) => {
    return (
        <div>
            <div className="LargeText">
                { props.text }
            </div>
            { props.progress }
        </div>
    )
} 

export default LargeText;