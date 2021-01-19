import TextTypes from "./text.types";

const INITIAL_STATE = {
    texts: []
};

const textReducer = (state = INITIAL_STATE, action) => {
    switch (action.types) {
        case TextTypes.CREATE_TEXT:
            return {
                ...state
            };
        default:
            return state;
    }
};

export default textReducer;