export const addNew = (text, newText) => {
    console.log("addNew");
    return [...text, newText];
};

export const updateText = (texts, newText) => {
    const newArray = texts.map(text => {
        if (text.id === newText.id) {
            return newText;
        }
        return text;
    });

    return newArray;
};

export const disableText = (texts, disableText) => {
    const { id } = disableText;
    const newArray = texts.filter(text => {
        if (text.id !== id) {
            return text;
        }
    });
    return newArray;
};