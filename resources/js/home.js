import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";

import HomePage from "./pages/homepage/homepage.component";

import { BasicBackground } from "../js/pages/background.styles";

const Home = () => {
    return (
        <div>
            <Header />
            <BasicBackground>
                <Switch>
                    // デフォルト値
                    <Route exact path="/" component={HomePage} />
                </Switch>
            </BasicBackground>
        </div>
    );
};

export default Home;
