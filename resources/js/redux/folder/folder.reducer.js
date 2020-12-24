import FolderActionTypes from "./folder.types";

const INITIAL_STATE = {
    folders: []
};

const folderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FolderActionTypes.SET_MAIN_FOLDER:
            return{
                ...state,
                folders: action.payload
            }
        default:
            return state;
    }
};

export default folderReducer;