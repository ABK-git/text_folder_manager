import FolderActionTypes from "./folder.types";
import { addNew, updateFolder, disableFolder } from "./folder.utils";

const INITIAL_STATE = {
    folders: [],
    duringFolder: [],
    isFetching: false
};

const folderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FolderActionTypes.FETCH_FOLDERS_START:
        case FolderActionTypes.CREATE_FOLDER:
        case FolderActionTypes.UPDATE_FOLDER:
        case FolderActionTypes.DELETE_FOLDER:
            return {
                ...state,
                isFetching: true
            };
        case FolderActionTypes.SET_DURING_FOLDER:
            return {
                ...state,
                //この時点でFolderの読み込みが終わっていないのでコメントアウト
                //isFetching: false,
                duringFolder: action.payload
            };
        case FolderActionTypes.SET_FOLDER:
            return {
                ...state,
                isFetching: false,
                folders: action.payload
            };
        case FolderActionTypes.ADD_FOLDER:
            return {
                ...state,
                isFetching: false,
                folders: addNew(state.folders, action.payload)
            };
        case FolderActionTypes.SET_UPDATE_FOLDER:
            return {
                ...state,
                isFetching: false,
                folders: updateFolder(state.folders, action.payload)
            };
        case FolderActionTypes.ADD_DURING_FOLDER:
            return {
                ...state,
                duringFolder: addNew(state.duringFolder, action.payload)
            };
        case FolderActionTypes.FOLDER_CLEAR:
            return {
                ...state,
                isFetching: false,
                folders: [],
                duringFolder: []
            };
        case FolderActionTypes.FOLDER_FAILURE:
            return {
                ...state,
                isFetching: false
            };
        case FolderActionTypes.DISABLE_FOLDER:
            return{
                ...state,
                isFetching: false,
                folders: disableFolder(state.folders, action.payload)
            }
        default:
            return state;
    }
};

export default folderReducer;
