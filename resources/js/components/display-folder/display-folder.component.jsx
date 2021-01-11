import React from "react";
import { connect } from "react-redux";
import {useHistory} from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";

import {
    DisplayFolderContainer,
    BackgroundImage,
    FolderFooter
} from "./display-folder.styles";

const DisplayFolder = ({ folder, user }) => {
    const history = useHistory();
    return (
        <DisplayFolderContainer
            onClick={() => history.push(`/${user.displayName}/folder/${folder.title}`)}
        >
            <BackgroundImage />
            <FolderFooter>{folder.title}</FolderFooter>
        </DisplayFolderContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
});

export default connect(mapStateToProps)(DisplayFolder);
