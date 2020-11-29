import React from "react";
import ErrorMessagesContainer from "./error-messages.container";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, errorMessage, ...otherProps }) => (
    <div className="group">
        {label ? <label className="form-input-label">{label}</label> : null}
        <input className="form-input" onChange={handleChange} {...otherProps} />
        <ErrorMessagesContainer errorMessage={errorMessage}/>
    </div>
);

export default FormInput;
