import React from "react";
//CSS
import './custom-button.styles.scss';

//childrenは受け取った子要素のこと
/**
 * (例)<CustomButton>Hello</CustomButton>
 * では、{Hello}を示す
 */
const CustomButton = ({ children, ...otherProps }) => (
    <button className="custom-button" {...otherProps}>{children}</button>
);

export default CustomButton;
