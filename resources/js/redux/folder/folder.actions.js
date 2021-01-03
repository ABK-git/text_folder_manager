import FolderActionTypes from "./folder.types";

// export const createFolder = ({folderCredentials}) => ({
//     type: FolderActionTypes.CREATE_FOLDER,
//     payload: {folderCredentials}
// });

export const setDuringFolder = (duringFolder) => ({
    type: FolderActionTypes.SET_DURING_FOLDER,
    payload: duringFolder
});

export const createDuringFolder = ({folderCredentials}) => ({
    type: FolderActionTypes.CREATE_DURING_FOLDER,
    payload : {folderCredentials}
});

export const fetchFoldersStart = (user) => ({
    type: FolderActionTypes.FETCH_FOLDERS_START,
    payload: {user}
});
