import React, { Form } from "react";
import './input-field.css';

const InputField = (props) => {
    return (
        <input
            type="text"
            className="input-handler" 
            placeholder={props.text}
        />
    )
}

export default InputField;