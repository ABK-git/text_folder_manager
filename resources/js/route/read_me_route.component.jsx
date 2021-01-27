import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { selectCurrentUser } from "../redux/user/user.selector";
import { createStructuredSelector } from "reselect";

import UserPage from "../pages/user_page/user_page.component";
import ReadMe from "../pages/read-me/read-me.component";

//ログイン時ホームにリダイレクトするRoute
const ReadMeRoute = ({ component: Component, user, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                user !== null && user.displayName === "read_me" ? (
                    <UserPage {...props} />
                ) : (
                    <ReadMe {...props} />
                )
            }
        />
    );
};

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
});

export default connect(mapStateToProps)(ReadMeRoute);
