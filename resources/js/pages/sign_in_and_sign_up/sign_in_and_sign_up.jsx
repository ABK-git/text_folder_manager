import React from "react";
//component
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
//background
import {BasicBackground} from "../background.styles";

const SignInAndSignUp = () => (
    <BasicBackground>
        <SignIn />
        <SignUp />
    </BasicBackground>
);

export default SignInAndSignUp;
