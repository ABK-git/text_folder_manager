import React from "react";
import ReactDOM from "react-dom";

import "./Index.css";
import Home from "./home";
import { BrowserRouter } from "react-router-dom";
//Redux
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";

//redux-loggerを使わない場合(actionの結果のみでいい場合)
//store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <Home />
            </PersistGate>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
