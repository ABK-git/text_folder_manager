import FolderActionTypes from "./folder.types";
import { addNewFolderToFolders } from "./folder.utils";

const INITIAL_STATE = {
    folders: [],
    duringFolder: [],
    isFetching: false
};

const folderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FolderActionTypes.FETCH_FOLDERS_START:
        case FolderActionTypes.CREATE_FOLDER:
            return {
                ...state,
                isFetching: true
            };
        case FolderActionTypes.SET_DURING_FOLDER:
            return {
                ...state,
                isFetching: false,
                duringFolder: action.payload,
                
            };
        case FolderActionTypes.ADD_FOLDER:
            return {
                ...state,
                isFetching: false,
                folders: addNewFolderToFolders(state.folders, action.payload)
            };
        default:
            return state;
    }
};

export default folderReducer;
