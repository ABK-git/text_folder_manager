import React from "react";
import { useLocation } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
    selectDuringFolder,
    selectFolders
} from "../../redux/folder/folder.selector";
//背景
import { Background } from "../background.styles";
//components
import FolderAndTextButtons from "../../components/folder-and-text-buttons/folder-and-text-buttons.component";
import DisplayDocument from "../../components/display-document/display-document.component";

const Folder = ({ duringFolder, folders }) => {
    //Locationを取得する
    const location = useLocation();
    //LocationからURLを取得する
    const path = location.pathname.slice(1).split("/");

    //中間テーブルとFolderの入れ物
    let during = null;
    let folder = new Array();

    //Userページ直下の場合
    if (path[1] === undefined) {
        //直下のFolderと中間テーブルを取得
        during = duringFolder.find(value => value.main_or_sub == true);
        folder = folders.filter(value => {
            return value.during_id === during.id;
        });
    }

    return (
        <Background>
            <FolderAndTextButtons duringFolder={during}/>
            <DisplayDocument folders={folder}/>
        </Background>
    );
};

const mapStateToProps = createStructuredSelector({
    duringFolder: selectDuringFolder,
    folders: selectFolders
});

export default connect(mapStateToProps)(Folder);
