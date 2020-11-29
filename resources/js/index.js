import React from "react";
import ReactDOM from "react-dom";

import "./Index.css";
import Home from "./home";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
