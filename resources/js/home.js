import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";

import HomePage from "./pages/homepage/homepage.component";

import { BasicBackground } from "../js/pages/background.styles";
import SignUp from "./pages/sign-up/sign-up.component";

const Home = () => {
    return (
        <div>
            <Header />
            <BasicBackground>
                <Switch>
                    // デフォルト値
                    <Route exact path="/" component={HomePage} />
                    <Route path="/signup" component={SignUp}/>
                </Switch>
            </BasicBackground>
        </div>
    );
};

export default Home;
