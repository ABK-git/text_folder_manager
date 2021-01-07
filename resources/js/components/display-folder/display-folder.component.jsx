import React from "react";

import { DisplayFolderContainer, BackgroundImage, FolderFooter } from "./display-folder.styles";

const DisplayFolder = ({ folder }) => (
    <DisplayFolderContainer>
        <BackgroundImage/>
        <FolderFooter>{folder.title}</FolderFooter>
    </DisplayFolderContainer>
);

export default DisplayFolder;
