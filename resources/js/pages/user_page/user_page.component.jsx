import React, { useEffect } from "react";
import { Route } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchFoldersStart } from "../../redux/folder/folder.actions";
import { selectCurrentUser } from "../../redux/user/user.selector";
//component
import PrivateUserRoute from "../../route/private_user_root.component";
import CreatingText from "../creating_text/creating-text.component";
import FolderContainer from "../folder/folder.container";
import TestPage from "../test/test_component";

const UserPage = ({ user, fetchFoldersStart, match }) => {
    useEffect(() => {
        fetchFoldersStart(user);
    }, [fetchFoldersStart]);

    return (
        <div>
            <PrivateUserRoute
                exact
                path={`${match.path}`}
                component={FolderContainer}
            />
            <Route
                exact
                path={[
                    `${match.path}/creating/:text_name`,
                    `${match.path}/:folder_title/creating/:text_name`
                ]}
                component={CreatingText}
            />

            <Route
                path={`${match.path}/_folder/:folder_name`}
                component={FolderContainer}
            />
            <Route
                exact
                path={`${match.path}/:folder_title/creating/:text_name/test`}
                component={TestPage}
            />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    fetchFoldersStart: user => dispatch(fetchFoldersStart(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
