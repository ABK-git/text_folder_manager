import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectDuringFolder } from "../../redux/folder/folder.selector";
//redux
import { selectCurrentUser } from "../../redux/user/user.selector";
//component
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
//styles
import { FolderDiv, FormAndButton } from "./create-folder-form.styles";

const CreateFolderForm = ({ user, duringFolder }) => {
    //入力フォームの表示・非表示
    const [isDisplay, setIsDisplay] = useState(false);
    //Folder名の入力フォーム
    const [folderCredentials, setFolderCredentials] = useState({
        folder_name: ""
    });
    //中間テーブル(一つだけ持つ、これを使って表示Folderを絞り込む)
    const [during, setDuring] = useState(null);

    //URLを取得
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname.slice(1).split("/");
        //Userトップのページの場合
        if (path[1] === undefined && duringFolder !== null) {
            console.log("topページ");
            //Mainの中間Folderを取得
            setDuring(
                duringFolder.filter(value => {
                    return value.main_or_sub == true;
                })
            );
        }
    },[]);

    //Folder作成フォームの表示・非表示
    const handleClick = () => {
        setIsDisplay(!isDisplay);
    };

    const handleChange = event => {
        const { value, name } = event.target;

        setFolderCredentials({ ...folderCredentials, [name]: value });
    };

    const handleSubmit = event => {
        event.preventDefault();

        //中間テーブルのidを取得
        console.log(during);
    };
    const { folder_name } = folderCredentials;

    return (
        <FolderDiv>
            <CustomButton design="createFolder" onClick={handleClick}>
                Folder
            </CustomButton>
            <FormAndButton
                onSubmit={handleSubmit}
                style={{ display: isDisplay ? "" : "none" }}
            >
                <FormInput
                    type="text"
                    name="folder_name"
                    value={folder_name}
                    handleChange={handleChange}
                    required
                ></FormInput>
                <CustomButton type="text" design="createFolderSubmit">
                    作成
                </CustomButton>
            </FormAndButton>
        </FolderDiv>
    );
};

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    duringFolder: selectDuringFolder
});

export default connect(mapStateToProps)(CreateFolderForm);
