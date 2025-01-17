import React, { useEffect } from "react";
import { Route } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchFoldersStart } from "../../redux/folder/folder.actions";
import { fetchTextsStart } from "../../redux/text/text.actions";
import { selectCurrentUser } from "../../redux/user/user.selector";
//component
import PrivateUserRoute from "../../route/private_user_root.component";
import CreatingText from "../creating_text/creating-text.component";
import FolderContainer from "../folder/folder.container";
import UserTopContainer from "../user_top/user_top.container";
import TestContainer from "../test/test.container";
import ReadMe from "../read-me/read-me.component";

const UserPage = ({ user, fetchFoldersStart, fetchTextsStart, match }) => {
    useEffect(() => {
        if (user) {
            fetchFoldersStart(user);
            fetchTextsStart(user);
        }
    }, [fetchFoldersStart]);

    return (
        <div>
            <PrivateUserRoute
                exact
                path={`${match.path}`}
                component={UserTopContainer}
            />
            <Route
                exact
                path={`${match.path}/creating/:text_name`}
                component={CreatingText}
            />

            <Route
                exact
                path={`${match.path}/_folder/:folder_id`}
                component={FolderContainer}
            />
            <Route
                exact
                path={[
                    `${match.path}/creating/:text_name/test`,
                    `${match.path}/_text/:text_id`
                ]}
                component={TestContainer}
            />
            <Route exact path={`${match.path}/read_me`} component={ReadMe} />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    fetchFoldersStart: user => dispatch(fetchFoldersStart(user)),
    fetchTextsStart: user => dispatch(fetchTextsStart(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
