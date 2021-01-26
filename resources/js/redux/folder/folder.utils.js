export const addNew = (folders, newFolder) => {
    return [...folders, newFolder];
};
export const updateFolder = (folders, newFolder) => {
    const newArray = folders.map(folder => {
        if (folder.id === newFolder.id) {
            return newFolder;
        }
        return folder;
    });

    return newArray;
};
export const disableFolder = (folders, disableFolder) => {
    const { id } = disableFolder;
    const newArray = folders.filter(folder => {
        if (folder.id !== id) {
            return folder;
        }
    });
    return newArray;
};
