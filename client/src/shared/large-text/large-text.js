import React, { Component } from 'react';
import './large-text.css';

class LargeText extends Component {
    render() {
        return (
            <div className="LargeText">
                { this.props.text }
            </div>
        )
    }
} 

export default LargeText;