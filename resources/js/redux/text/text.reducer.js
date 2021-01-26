import { addNew, updateText, disableText } from "../text/text.utils";
import TextActionTypes from "./text.types";

const INITIAL_STATE = {
    texts: [],
    isFetching: false,
    creating_text: ""
};

const textReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TextActionTypes.FETCH_TEXTS_START:
        case TextActionTypes.CREATE_TEXT:
        case TextActionTypes.UPDATE_TEXT:
        case TextActionTypes.UPDATE_TEXT_NAME:
        case TextActionTypes.DELETE_TEXT:
            return {
                ...state,
                isFetching: true
            };
        case TextActionTypes.ADD_TEXT:
            return {
                ...state,
                isFetching: false,
                texts: addNew(state.texts, action.payload)
            };
        case TextActionTypes.SET_TEXTS:
            return {
                ...state,
                isFetching: false,
                texts: action.payload
            };
        case TextActionTypes.TEXT_FAILURE:
            return {
                ...state,
                isFetching: true
            };

        case TextActionTypes.CREATING_TEXT:
            return {
                ...state,
                creating_text: action.payload.creating_text
            };

        case TextActionTypes.CLEAR_CREATING_TEXT:
            return {
                ...state,
                creating_text: ""
            };

        case TextActionTypes.SET_UPDATE_TEXT_NAME:
            return {
                ...state,
                isFetching: false,
                texts: updateText(state.texts, action.payload)
            };

        case TextActionTypes.DISABLE_DELETE_TEXT:
            return {
                ...state,
                isFetching: false,
                texts: disableText(state.texts, action.payload)
            }

        default:
            return state;
    }
};

export default textReducer;
