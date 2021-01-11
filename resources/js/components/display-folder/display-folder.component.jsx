import React from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";

import {
    DisplayFolderContainer,
    BackgroundImage,
    FolderFooter
} from "./display-folder.styles";

const DisplayFolder = ({ folder, user }) => {
    const history = useHistory();
    const location = useLocation();

    return (
        <DisplayFolderContainer
            onClick={() => {
                const path = location.pathname.slice(1).split("/");
                
                if (path.length === 1) {
                    history.push(`${user.displayName}/_folder/${folder.title}`);
                } else {
                    history.push(`${location.pathname}/${folder.title}`);
                }
            }}
            //onClick={() => history.push(`${user.displayName}/folder/${folder.title}`)}
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
