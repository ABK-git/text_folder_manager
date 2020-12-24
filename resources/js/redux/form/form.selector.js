import { createSelector } from "reselect";

const selectForm = state => state.form;

export const selectSignInForm = createSelector(
    [selectForm],
    form => form.signInForm
);

export const selectSignUpForm = createSelector(
    [selectForm],
    form => form.signUpForm
);
