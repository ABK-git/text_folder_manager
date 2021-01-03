import FolderActionTypes from "./folder.types";

const INITIAL_STATE = {
    folders: [],
    duringFolder: [],
    isFetching: false
};

const folderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FolderActionTypes.FETCH_FOLDERS_START:
            return {
                ...state,
                isFetching: true
            };
        case FolderActionTypes.SET_DURING_FOLDER:
            return {
                ...state,
                duringFolder: action.payload
            };
        default:
            return state;
    }
};

export default folderReducer;
