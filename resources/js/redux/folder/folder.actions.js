import FolderActionTypes from "./folder.types";

export const createFolderStart = (folderCredentials) => ({
    type: FolderActionTypes.CREATE_FOLDER,
    payload: folderCredentials
});
