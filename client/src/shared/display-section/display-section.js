import React, { Component } from 'react';
import './display-section.css';
import EncourageButton from '../encourage-button/button';
import LargeText from '../large-text/large-text';

class DisplaySection extends Component {
    render() {
        return (
            <div className="DisplaySection" style = {{ backgroundImage: `url(${process.env.PUBLIC_URL + this.props.imageName})`}}>
                <LargeText text={this.props.largeText}/>
                <EncourageButton text={this.props.buttonText} handleClick={this.props.handleClick}/>
            </div>
        );
    }
}

export default DisplaySection;