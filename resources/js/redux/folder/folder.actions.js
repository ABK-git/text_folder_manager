import FolderActionTypes from "./folder.types";

export const createFolder = ({folderCredentials}) => ({
    type: FolderActionTypes.CREATE_FOLDER,
    payload: {folderCredentials}
});

export const setMainFolder = (folder) => ({
    type: FolderActionTypes.SET_MAIN_FOLDER,
    payload: folder
});
