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

export const selectIsTextLoading = createSelector(
    [selectText],
    text => text.isFetching
);

//作りかけの文章を取り出す
export const selectCreatingText = createSelector(
    [selectText],
    text => text.creating_text
);
