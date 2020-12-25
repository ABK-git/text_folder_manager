import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { selectCurrentUser } from "../redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { errorClear } from "../redux/error/error.actions";

//ログイン時ホームにリダイレクトするRoute
const PrivateUserRoot = ({
    component: Component,
    location,
    user,
    errorClear,
    ...rest
}) => {
    //画面移動時にエラーを削除する
    // useEffect(() => {
    //     errorClear();
    // });

    return (
        <Route
            {...rest}
            render={props =>
                user !== null &&
                user.displayName === location.pathname.slice(1) ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
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

export default connect(mapStateToProps, mapDispatchToProps)(PrivateUserRoot);
