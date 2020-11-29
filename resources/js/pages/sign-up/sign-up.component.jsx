import React, { useState } from "react";
import axios from "axios";
//component
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
//redux
import { signUpStart } from "../../redux/user/user.actions";
//CSS
import "./sign-up.styles.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const SignUp = ({ signUpStart }) => {
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

    //エラーメッセージのuseState
    const [errorMessages, setErrorMessages] = useState({
        displayNameError: [],
        emailError: [],
        passwordError: [],
        passwordConfirmationError: []
    });

    //Formを送信したとき
    const handleSubmit = async event => {
        event.preventDefault();

        //apiを呼び出してユーザー情報を登録する
        // axios
        //     .post("/api/register", userCredentials)
        //     .then(response => {
        //         console.log(response.config.data);
        //         //history.push("/");
        //     })
        //     .catch(error => {
        //         //エラーメッセージ取得
        //         const errors = error.response.data.errors;

        //         //エラーメッセージをuseStateに格納
        //         setErrorMessages({
        //             ...errorMessages,
        //             displayNameError: errors.displayName,
        //             emailError: errors.email,
        //             passwordError: errors.password,
        //             passwordConfirmationError: errors.password_confirmation
        //         });
        //     });

        signUpStart({ userCredentials });
    };
    //useStateからユーザー情報を取り出す
    const {
        displayName,
        email,
        password,
        password_confirmation
    } = userCredentials;
    //useStateからエラーメッセージを取り出す
    const {
        displayNameError,
        emailError,
        passwordError,
        passwordConfirmationError
    } = errorMessages;

    return (
        <div className="sign-up">
            <h1 className="sign-up-message">ユーザー情報を登録してください!</h1>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    handleChange={handleChange}
                    label="ユーザー名"
                    errorMessage={displayNameError}
                    required
                />
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    handleChange={handleChange}
                    label="メールアドレス"
                    errorMessage={emailError}
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    handleChange={handleChange}
                    label="パスワード"
                    errorMessage={passwordError}
                    required
                />
                <FormInput
                    type="password"
                    name="password_confirmation"
                    value={password_confirmation}
                    handleChange={handleChange}
                    label="確認パスワード"
                    errorMessage={passwordConfirmationError}
                    required
                />
                <CustomButton type="submit">登録</CustomButton>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default withRouter(connect(null, mapDispatchToProps)(SignUp));
