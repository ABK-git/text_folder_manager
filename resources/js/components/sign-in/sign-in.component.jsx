import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
//component
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
//redux
import { signInStart } from "../../redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectSignInError } from "../../redux/error/error.selector";
import { selectSignInForm } from "../../redux/form/form.selector";

//CSS
import { SignInContainer, SignInForm, SignInMessage } from "./sign-in.styles";

const SignIn = ({ signInForm, signInStart, errors }) => {
    //入力値のuseState
    const [userCredentials, setUserCredentials] = useState({
        email: "",
        password: ""
    });

    useEffect(() => {
        if (signInForm !== []) {
            setUserCredentials(signInForm);
        }
    }, []);

    //Formに変化が生じた時
    const handleChange = event => {
        //Formの名前と値を取得
        const { name, value } = event.target;
        //入力値をuseStateに記録
        setUserCredentials({ ...userCredentials, [name]: value });
    };

    //Formを送信したとき
    const handleSubmit = async event => {
        event.preventDefault();

        //ログイン処理の開始
        signInStart({ userCredentials });
    };

    const { email, password } = userCredentials;

    return (
        <SignInContainer>
            <SignInMessage>SIGN IN</SignInMessage>
            <SignInForm onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    handleChange={handleChange}
                    label="メールアドレス"
                    errorMessage={errors.email}
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    handleChange={handleChange}
                    label="パスワード"
                    errorMessage={errors.password}
                    required
                />

                <CustomButton type="submit" design="auth">
                    ログイン
                </CustomButton>
            </SignInForm>
        </SignInContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    errors: selectSignInError,
    signInForm: selectSignInForm
});

const mapDispatchToProps = dispatch => ({
    signInStart: userCredentials => dispatch(signInStart(userCredentials))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
