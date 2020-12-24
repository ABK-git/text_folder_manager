import formActionTypes from "./form.types";

const INITIAL_STATE = {
    signInForm: [],
    signUpForm: []
};

const formReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case formActionTypes.SET_SIGN_IN_FORM:
            return {
                ...state,
                signInForm: action.payload
            };

        case formActionTypes.SET_SIGN_UP_FORM:
            return {
                ...state,
                signUpForm: action.payload
            };

        case formActionTypes.FORM_CLEAR:
            return {
                ...state,
                signUpForm: [],
                signInForm: []
            };

        default:
            return state;
    }
};

export default formReducer;
