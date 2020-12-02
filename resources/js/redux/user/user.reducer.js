import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    signInError: [],
    signUpError: [],
};
//stateの値に変化が起こった時は
//ここでaction.payloadをstateに渡す
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                signInError: null,
                signUpError: null
            };
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                currentUser: null,
                signInError: null,
                signUpError: action.payload
            };
        case UserActionTypes.SIGN_IN_FAILURE:
            return {
                ...state,
                currentUser: null,
                signInError: action.payload,
                signUpError: null
            };
        default:
            return state;
    }
};

export default userReducer;
