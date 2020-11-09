import React from "react";
import { Route, Switch } from "react-router-dom";

import "./home.css";

import HomePage from "./pages/homepage/homepage.component";

 const Home = () => {
    return (
        <div>
            <Switch>
                // デフォルト値
                <Route exact path="/" component={HomePage} />
            </Switch>
        </div>
    );
};

export default Home;
