import React, {useState} from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { fetchFoldersStart } from "../../redux/folder/folder.sagas";
//redux
import { selectCurrentUser } from "../../redux/user/user.selector";
//component
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
//styles
import { FolderDiv, FormAndButton } from "./create-folder-form.styles";

const CreateFolderForm = ({user}) => {
    const [isDisplay, setIsDisplay] = useState(false);

    const [folderCredentials, setFolderCredentials] = useState([]);

    const handleClick = () => {
        setIsDisplay(!isDisplay);
    };

    const handleChange = event => {
        const { value, name } = event.target;

        setFolderCredentials({ ...folderCredentials, [name]: value });
        console.log(folderCredentials);
    };

    const location = useLocation();

    const handleSubmit = event => {
        event.preventDefault();
        
        const path = location.pathname.slice(1).split("/")
        //user直下にfolderを作成する場合
        if(path[1] === undefined){
            console.log(user.id);
        }
        
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
    user: selectCurrentUser
});

export default connect(mapStateToProps)(CreateFolderForm);
