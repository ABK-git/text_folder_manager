import ErrorTypes from "./error.types";

const INITIAL_STATE = {
    signInError: [],
    signUpError: []
};

const errorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ErrorTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                signInError: [],
                signUpError: action.payload
            };

        case ErrorTypes.SIGN_IN_FAILURE:
            return {
                ...state,
                signInError: action.payload,
                signUpError: []
            };

        case ErrorTypes.ERROR_CLEAR:
            return {
                ...state,
                signInError: [],
                signUpError: []
            };
        default:
            return state;
    }
};

export default errorReducer;
