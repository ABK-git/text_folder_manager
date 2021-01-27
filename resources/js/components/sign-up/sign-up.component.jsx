import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
//component
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
//redux
import { signUpStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSignUpError } from "../../redux/error/error.selector";
import { selectSignUpForm } from "../../redux/form/form.selector";
//CSS
import { SignUpForm, SignUpMessage, SignUpContainer } from "./sign-up.styles";

const SignUp = ({ signUpForm, signUpStart, errors }) => {
    //入力値のuseState
    const [userCredentials, setUserCredentials] = useState({
        displayName: "",
        email: "",
        password: "",
        password_confirmation: ""
    });

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

        signUpStart({ userCredentials });
    };

    useEffect(() => {
        if (signUpForm !== []) {
            setUserCredentials(signUpForm);
        }
    }, []);

    //useStateからユーザー情報を取り出す
    const {
        displayName,
        email,
        password,
        password_confirmation
    } = userCredentials;

    return (
        <SignUpContainer>
            <SignUpMessage>SIGN UP</SignUpMessage>
            <SignUpForm onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    handleChange={handleChange}
                    label="ユーザー名"
                    errorMessage={errors.displayName}
                    required
                />
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
                    autoComplete="on"
                    value={password}
                    handleChange={handleChange}
                    label="パスワード"
                    errorMessage={errors.password}
                    required
                />
                <FormInput
                    type="password"
                    name="password_confirmation"
                    value={password_confirmation}
                    autoComplete="on"
                    handleChange={handleChange}
                    label="確認パスワード"
                    required
                />
                <CustomButton type="submit" design="auth">
                    登録
                </CustomButton>
            </SignUpForm>
        </SignUpContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    errors: selectSignUpError,
    signUpForm: selectSignUpForm
});

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
