import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import {
    selectDuringFolder,
    selectFolders
} from "../../redux/folder/folder.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

import { RootPassContainer } from "./display-root-pass.styles";

const DisplayRootPass = ({ selectFolder, duringFolder, folders, user }) => {
    //folderの格納場所
    const rootFolders = new Array();
    const newRootFolders = new Array();

    if (selectFolder != undefined) {
        rootFolders.push(selectFolder);
        //現在確認中の中間テーブル
        let nowDuring = duringFolder.find(
            during => selectFolder.during_id === during.id
        );
        console.log("nowDuring");
        console.log(nowDuring);
        while (nowDuring.main_or_sub == false) {
            //現在の中間テーブルが属するfolderを取得
            let nowFolder = folders.find(
                folder => folder.id === nowDuring.folder_id
            );
            console.log("nowFolder");
            console.log(nowFolder);
            //現在のfolderを格納
            rootFolders.push(nowFolder);

            //次の中間テーブルへ移動
            nowDuring = duringFolder.find(
                during => nowFolder.during_id === during.id
            );
        }
        console.log("rootFolders");
        console.log(rootFolders);

        //配列を並び替える
        for (let num = 0; num < rootFolders.length - 1; num++) {
            newRootFolders.push(rootFolders[rootFolders.length - num - 1]);
        }
        console.log(newRootFolders);
    }
    return selectFolder ? (
        <RootPassContainer>
            {newRootFolders.map((newRootFolder, index) => {
                return (
                    <span key={index}>
                        /
                        <Link to={`/${user.displayName}/_folder/${newRootFolder.id}`}>
                            {newRootFolder.title}
                        </Link>
                    </span>
                );
            })}
            {selectFolder ? <span>/{selectFolder.title}</span> : ""}
        </RootPassContainer>
    ) : (
        ""
    );
};

const mapStateToProps = createStructuredSelector({
    duringFolder: selectDuringFolder,
    folders: selectFolders,
    user: selectCurrentUser
});

export default connect(mapStateToProps)(DisplayRootPass);
