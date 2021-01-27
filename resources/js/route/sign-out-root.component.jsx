import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { selectCurrentUser } from "../redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { errorClear } from "../redux/error/error.actions";
import { formClear } from "../redux/form/form.actions";

//ログイン時ホームにリダイレクトするRoute
const SignOutRoute = ({ component: Component, user, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                user ? (
                    <Redirect to={"/" + user.displayName} />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    errorClear: () => dispatch(errorClear()),
    formClear: () => dispatch(formClear())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignOutRoute);
