import FolderActionTypes from "./folder.types";

const INITIAL_STATE = {
    folders: [],
    duringFolder: [],
};

const folderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FolderActionTypes.SET_DURING_FOLDER:
            return{
                ...state,
                duringFolder: action.payload
            }
        default:
            return state;
    }
};

export default folderReducer;