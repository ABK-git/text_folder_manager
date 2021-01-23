import React from "react";
//components
import DisplayFolder from "../display-folder/display-folder.component";
import DisplayText from "../display-text/display-text.component";
//css
import { DisplayContainer } from "./display-document.styles";

const DisplayDocument = ({ documents }) => (
    <DisplayContainer>
        {documents.map(document => {
            //textの場合
            if(document.content != undefined){
                return <DisplayText key={document.id} text={document}/>
            }//folderの場合
            else{
                return <DisplayFolder key={document.id} folder={document}/>
            }
        })}
    </DisplayContainer>
);

export default DisplayDocument;
