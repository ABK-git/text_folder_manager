import { createSelector } from "reselect";

const selectText = state => state.text;

export const selectTexts = createSelector([selectText], text => text.texts);
