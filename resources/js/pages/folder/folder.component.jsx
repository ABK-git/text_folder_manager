import React from "react";
import { useHistory, useLocation } from "react-router-dom";
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
    const location = useLocation();
    const history = useHistory();

    //LocationからURLを取得する
    const path = location.pathname.slice(1).split("/");

    //中間テーブルとFolderの入れ物
    let during = null;
    let folder = new Array();

    try {
        //Userページ直下の場合
        if (path[1] === undefined) {
            console.log("直下");
            //直下のFolderと中間テーブルを取得
            during = duringFolder.find(value => value.main_or_sub == true);
            folder = folders.filter(value => {
                return value.during_id === during.id;
            });
        }
        else {
            const index = path.length;
            const selectFolder = folders.find(
                value => path[index - 1] === value.title
            );
            console.log(selectFolder);
            during = duringFolder.find(
                value => value.folder_id === selectFolder.id
            );
            folder = folders.filter(value => {
                return value.during_id === during.id;
            });
        }
    } catch (e) {
        //後でエラーページを作って移動させる(エラーページにはホーム直下{"/"}につなげるボタンを作る)
        history.push(`/${path[0]}`);
    }

    return (
        <Background>
            <FolderAndTextButtons duringFolder={during} haveFolders={folder} />
            <DisplayDocument folders={folder} />
        </Background>
    );
};

const mapStateToProps = createStructuredSelector({
    duringFolder: selectDuringFolder,
    folders: selectFolders
});

export default connect(mapStateToProps)(Folder);
