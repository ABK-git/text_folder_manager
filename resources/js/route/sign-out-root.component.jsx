import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { selectCurrentUser } from "../redux/user/user.selector";
import { createStructuredSelector } from "reselect";

//ログイン時ホームにリダイレクトするRoute
const SignOutRoute = ({ component: Component, user, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            user ? <Redirect to="/" /> : <Component {...props} />
        }
    />
);

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
});

export default connect(mapStateToProps)(SignOutRoute);
