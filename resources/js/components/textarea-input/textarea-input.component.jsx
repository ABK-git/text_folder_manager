import React from "react";

import {
    GroupContainer,
    TextareaInputLabel,
    TextareaInputContainer
} from "./textarea-input.styles";

const TextareaInput = ({ handleChange, label,value, ...otherProps }) => (
    <GroupContainer>
        {label ? <TextareaInputLabel>{label}</TextareaInputLabel> : ""}
        
        <TextareaInputContainer onChange={handleChange} value={value} {...otherProps}/>
    </GroupContainer>
);

export default TextareaInput;
