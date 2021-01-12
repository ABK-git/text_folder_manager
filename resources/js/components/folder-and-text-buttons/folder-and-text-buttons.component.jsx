import React from "react";
//component
import CreateFolderForm from "../create-folder-form/create-folder-form.component";
import CreateTextForm from "../create-text-form/create-text-form.component";

import { CreateFolderAndTextContainer } from "./folder-and-text-buttons.styles.jsx";

const FolderAndTextButtons = ({duringFolder, haveFolders}) => (
    <CreateFolderAndTextContainer>
        <CreateTextForm duringFolder={duringFolder}/>
        <CreateFolderForm duringFolder={duringFolder} haveFolders={haveFolders}/>
    </CreateFolderAndTextContainer>
);

export default FolderAndTextButtons;
