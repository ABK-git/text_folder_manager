import React from "react";
//component
import CreateFolderForm from "../create-folder-form/create-folder-form.component";
import CustomButton from "../custom-button/custom-button.component";

import { CreateFolderAndTextContainer } from "./folder-and-text-buttons.styles.jsx";

const FolderAndTextButtons = ({duringFolder, haveFolders}) => (
    <CreateFolderAndTextContainer>
        <CustomButton design="createText">Text</CustomButton>
        <CreateFolderForm duringFolder={duringFolder} haveFolders={haveFolders}/>
    </CreateFolderAndTextContainer>
);

export default FolderAndTextButtons;
