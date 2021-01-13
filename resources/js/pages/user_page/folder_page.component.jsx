import React from "react";
import { Route, useLocation } from "react-router-dom";
//component
import CreatingText from "../creating_text/creating-text.component";
import FolderContainer from "../folder/folder.container";

const FolderPage = () => {
    const location = useLocation();
    const path = location.pathname.slice(1).split("/");
    return (
        <div>
            <Route exact path={`${match.path}`} component={FolderContainer} />
            <Route
                exact
                path={`${match.path}/creating/:text_name`}
                component={CreatingText}
            />
        </div>
    );
};

export default FolderPage;
