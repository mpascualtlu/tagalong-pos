import React, { Component } from 'react';
import './option.css';

class LargeSelectionOption extends Component {
    render() {
        return (
            <div
                className="largeSelectionOption"
                style={{
                    position: 'relative',
                    left: this.props.isLeft ? '2px' : '0',
                    right: !this.props.isLeft ? '2px' : '0',
                    borderLeft: !this.props.isLeft ? '2px solid white' : '0',
                    borderRight: this.props.isLeft ? '2px solid white' : '0'
                }}
            >
                <div className="option">
                    { this.props.text }
                    <hr className="underscore"></hr>
                </div>
            </div>

        )
    }
}

export default LargeSelectionOption;