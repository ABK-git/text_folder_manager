import React from "react";
import { useParams } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
    selectDuringFolder,
    selectFolders
} from "../../redux/folder/folder.selector";
import { selectTexts } from "../../redux/text/text.selector.js";
//背景
import { Background } from "../background.styles";
//components
import FolderAndTextButtons from "../../components/folder-and-text-buttons/folder-and-text-buttons.component";
import DisplayDocument from "../../components/display-document/display-document.component";

const Folder = ({ duringFolder, folders, texts }) => {
    const params = useParams();

    let selectFolder = null;

    //中間テーブルとFolderの入れ物
    let during = null;
    let folder = new Array();
    let text = new Array();

    let documents = new Array();

    const { folder_id } = params;
    selectFolder = folders.find(value => folder_id === value.id);

    during = duringFolder.find(value => value.folder_id === selectFolder.id);

    folder = folders.filter(value => {
        return value.during_id === during.id;
    });
    text = texts.filter(value => {
        return value.during_id === during.id;
    });

    documents = folder.concat(text).sort((a, b) => {
        if (a.updated_at < b.updated_at) {
            return 1;
        } else {
            return -1;
        }
    });
    console.log("document");
    console.log(documents);

    return (
        <Background>
            <FolderAndTextButtons
                duringFolder={during}
                haveFolders={folder}
                haveTexts={text}
            />
            <DisplayDocument
                documents={documents}
                selectFolder={selectFolder}
            />
        </Background>
    );
};

const mapStateToProps = createStructuredSelector({
    duringFolder: selectDuringFolder,
    folders: selectFolders,
    texts: selectTexts
});

export default connect(mapStateToProps)(Folder);
