import React from "react";
import { Route, Switch } from "react-router-dom";
//Header
import Header from "./components/header/header.component";
//Page
import HomePage from "./pages/homepage/homepage.component";
import SignUpContainer from "./pages/sign-up/sign-up.container";
import SignInContainer from "./pages/sign-in/sign-in.container";
//Route
import SignOutRoute from "./route/sign-out-root.component";
//background
import { BasicBackground } from "../js/pages/background.styles";

const Home = () => {
    return (
        <div>
            <Header />
            <BasicBackground>
                <Switch>
                    // デフォルト値
                    <Route exact path="/" component={HomePage} />
                    <SignOutRoute path="/signup" component={SignUpContainer}/>
                    <SignOutRoute path="/signin" component={SignInContainer}/>
                </Switch>
            </BasicBackground>
        </div>
    );
};

export default Home;
