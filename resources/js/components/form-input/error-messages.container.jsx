import React from "react";

import "./form-input.styles.scss";

const ErrorMessagesContainer = ({ errorMessage }) => (
    <div>
        {errorMessage
            ? Object.values({ errorMessage })
                  .join()
                  .split(",")
                  .map((error, index) => (
                      <p className="error-messages" key={index}>
                          {error}
                      </p>
                  ))
            : ""}
    </div>
);

export default ErrorMessagesContainer;
