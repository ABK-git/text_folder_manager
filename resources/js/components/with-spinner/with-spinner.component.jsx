import React from "react";

import { SpinnerAnimation, SpinnerOverlay } from "./with-spinner.styles";

const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerAnimation />
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps} />
        );
    };
    return Spinner;
};
export default WithSpinner;
