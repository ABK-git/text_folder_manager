import React, { useState } from "react";
//component
import CreateFolderFormContainer from "../create-folder-form/create-folder-form.container";
import CustomButton from "../custom-button/custom-button.component";

import { CreateFolderAndTextContainer } from "./folder-and-text-buttons.styles.jsx";

const FolderAndTextButtons = () => (

    <CreateFolderAndTextContainer>
        <CustomButton design="createText">Text</CustomButton>
        <CreateFolderFormContainer/>
    </CreateFolderAndTextContainer>
);

export default FolderAndTextButtons;
