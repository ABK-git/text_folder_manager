import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, useLocation } from "react-router-dom";
import { selectCurrentUser } from "../redux/user/user.selector";
import { createStructuredSelector } from "reselect";

//ログイン時ホームにリダイレクトするRoute
const PrivateUserRoot = ({ component: Component, user, ...rest }) => {
    const location = useLocation();

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

export default connect(mapStateToProps)(PrivateUserRoot);
