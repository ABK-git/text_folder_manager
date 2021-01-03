import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import FolderAndTextButtons from "../../components/folder-and-text-buttons/folder-and-text-buttons.component";
import { fetchFoldersStart } from "../../redux/folder/folder.actions";

import { selectCurrentUser } from "../../redux/user/user.selector";
//背景
import { BasicBackground } from "../background.styles";

const UserPage = ({ user, fetchFoldersStart }) => {
    useEffect(() => {
        fetchFoldersStart(user);
    }, []);
    return (
        <BasicBackground>
            <FolderAndTextButtons />
        </BasicBackground>
    );
};

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    fetchFoldersStart: (user) => dispatch(fetchFoldersStart(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
