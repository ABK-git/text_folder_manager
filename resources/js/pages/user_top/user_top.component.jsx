import React from "react";
//redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
    selectDuringFolder,
    selectFolders
} from "../../redux/folder/folder.selector";
import { selectTexts } from "../../redux/text/text.selector";
//背景
import { Background } from "../background.styles";
//components
import FolderAndTextButtons from "../../components/folder-and-text-buttons/folder-and-text-buttons.component";
import DisplayDocument from "../../components/display-document/display-document.component";

const UserTopPage = ({ duringFolder, folders, texts }) => {

    //中間テーブルとFolderの入れ物
    let during = null;
    let folder = new Array();
    let text = new Array();

    let documents = new Array();

    //直下のFolder・Textと中間テーブルを取得
    during = duringFolder.find(value => value.main_or_sub == true);
    folder = folders.filter(value => {
        return value.during_id === during.id;
    });
    text = texts.filter(value => {
        return value.during_id === during.id;
    });
    //folderとtextをまとめる
    documents = folder.concat(text).sort((a, b) => {
        if (a.updated_at < b.updated_at) {
            return 1;
        } else {
            return -1;
        }
    });

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

export default connect(mapStateToProps)(UserTopPage);
