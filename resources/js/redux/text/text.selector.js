import { createSelector } from "reselect";

const selectText = state => state.text;

export const selectTexts = createSelector([selectText], text =>
    text.texts.sort((a, b) => {
        if (a.updated_at < b.updated_at) {
            return 1;
        } else {
            return -1;
        }
    })
);
