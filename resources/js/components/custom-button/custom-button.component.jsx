import React from "react";
//CSS
import { CustomButtonContainer } from "./custom-button.styles";


//childrenは受け取った子要素のこと
/**
 * (例)<CustomButton>Hello</CustomButton>
 * では、{Hello}を示す
 */
const CustomButton = ({ children, ...otherProps }) => (
    <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
);

export default CustomButton;
