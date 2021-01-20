import { addNew } from "../folder/folder.utils";
import TextActionTypes from "./text.types";

const INITIAL_STATE = {
    texts: [],
    isFetching: true
};

const textReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TextActionTypes.ADD_TEXT:
            return {
                ...state,
                isFetching: true,
                texts: addNew(state.texts, action.payload)
            };
        case TextActionTypes.CREATE_TEXT:
            return {
                ...state,
                isFetching: false
            };

        default:
            return state;
    }
};

export default textReducer;