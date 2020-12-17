import React from "react";
import { Route, Switch } from "react-router-dom";
//Header
import Header from "./components/header/header.component";
//Page
import SignInAndSignUp from "./pages/sign_in_and_sign_up/sign_in_and_sign_up";
import UserPage from "./pages/user_page/user_page.component";
//Root
import SignOutRoute from "./route/sign-out-root.component";
import PrivateUserRoot from "./route/private_user_root.component";

const Home = () => {
    return (
        <div>
            <Header />
            <Switch>
                <SignOutRoute exact path="/" component={SignInAndSignUp} />
                <PrivateUserRoot path="/:user_name" component={UserPage}/>
            </Switch>
        </div>
    );
};

export default Home;
