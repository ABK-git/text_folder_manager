import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";

import HomePage from "./pages/homepage/homepage.component";

const Home = () => {
    return (
        <div>
            <Header />
            <Switch>
                // デフォルト値
                <Route exact path="/" component={HomePage} />
            </Switch>
        </div>
    );
};

export default Home;
