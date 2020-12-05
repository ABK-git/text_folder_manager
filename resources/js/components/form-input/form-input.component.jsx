import React from "react";
//component
import ErrorMessagesContainer from "./error-messages.container";
//css
import "./form-input.styles.scss";

const FormInput = ({
    handleChange,
    label,
    value,
    errorMessage,
    ...otherProps
}) => (
    <div className="group">
        {label ? <label className="form-input-label">{label}</label> : ""}
        <input className="form-input" onChange={handleChange} {...otherProps} />
        <ErrorMessagesContainer errorMessage={errorMessage} />
    </div>
);

export default FormInput;
