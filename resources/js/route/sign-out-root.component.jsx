import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { selectCurrentUser } from "../redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { errorClear } from "../redux/error/error.actions";

//ログイン時ホームにリダイレクトするRoute
const SignOutRoute = ({ component: Component, user, errorClear, ...rest }) => {
    //画面移動時にエラーを削除する
    useEffect(() => {
        errorClear();
    })

    return (
        <Route
            {...rest}
            render={props =>
                user ? <Redirect to="/" /> : <Component {...props} />
            }
        />
    );
};

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    errorClear: () => dispatch(errorClear())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignOutRoute);
