import React, { useEffect } from "react";
import { Route } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchFoldersStart } from "../../redux/folder/folder.actions";
import { selectCurrentUser } from "../../redux/user/user.selector";
//component
import FolderContainer from "../folder/folder.container";
import PrivateUserRoute from "../../route/private_user_root.component";

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
              path={`${match.path}/folder/`+":folder_name"}
              component={FolderContainer}
            />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    fetchFoldersStart: (user) => dispatch(fetchFoldersStart(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
