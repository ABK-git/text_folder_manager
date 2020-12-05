import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
};
//stateの値に変化が起こった時は
//ここでaction.payloadをstateに渡す
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SIGN_IN_START:
        case UserActionTypes.SIGN_UP_START:
            return {
                ...state,
            };

        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
            };
        
        case UserActionTypes.SIGN_UP_FAILURE:
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT:
            return {
                ...state,
                currentUser: null,
            };
        default:
            return state;
    }
};

export default userReducer;
