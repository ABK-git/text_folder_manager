import React from "react";
import { useHistory, useLocation } from "react-router-dom";
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
    const location = useLocation();
    const history = useHistory();

    //LocationからURLを取得する
    const path = location.pathname.slice(1).split("/");

    //中間テーブルとFolderの入れ物
    let during = null;
    let folder = new Array();
    let text = new Array();

    let documents = new Array();
    try {
        const index = path.length;
        const selectFolder = folders.find(
            value => path[index - 1] === value.id
        );

        during = duringFolder.find(
            value => value.folder_id === selectFolder.id
        );

        folder = folders.filter(value => {
            return value.during_id === during.id;
        });
        text = texts.filter(value => {
            return value.during_id === during.id;
        });

        documents = folder.concat(text);
        console.log("document");
        console.log(documents);
    } catch (e) {
        console.log(e);
        //後でエラーページを作って移動させる(エラーページにはホーム直下{"/"}につなげるボタンを作る)
        history.push(`/${path[0]}`);
    }

    return (
        <Background>
            <FolderAndTextButtons
                duringFolder={during}
                haveFolders={folder}
                haveTexts={text}
            />
            <DisplayDocument documents={documents} />
        </Background>
    );
};

const mapStateToProps = createStructuredSelector({
    duringFolder: selectDuringFolder,
    folders: selectFolders,
    texts: selectTexts
});

export default connect(mapStateToProps)(Folder);
