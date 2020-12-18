import React from "react";
//component
import ErrorMessagesContainer from "./error-messages.container";
//css
import { FormInputLabel, GroupContainer, FormInputContainer } from "./form-input.styles";


const FormInput = ({
    handleChange,
    label,
    value,
    errorMessage,
    ...otherProps
}) => (
    <GroupContainer>
        {label ? (
            <FormInputLabel>
                {label}
            </FormInputLabel>
        ) : (
            ""
        )}
        <FormInputContainer onChange={handleChange} {...otherProps} />
        <ErrorMessagesContainer errorMessage={errorMessage} />
    </GroupContainer>
);

export default FormInput;
