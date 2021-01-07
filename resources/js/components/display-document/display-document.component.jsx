import React from "react";
//components
import DisplayFolder from "../display-folder/display-folder.component";
//css
import { DisplayContainer } from "./display-document.styles";

const DisplayDocument = ({ folders }) => (
    //textを実装したらここでFolderとtextを合成して
    //updateで並び替えとidでmapを使う
    <DisplayContainer>
        {folders.map(folder => (
            <DisplayFolder key={folder.id} folder={folder}/>
        ))}
    </DisplayContainer>
);

export default DisplayDocument;
