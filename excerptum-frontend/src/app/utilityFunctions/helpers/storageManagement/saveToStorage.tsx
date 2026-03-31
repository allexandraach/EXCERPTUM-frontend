export function saveToStorage(storage, key, value, stringify = false) {
    if (key && value) {
        if (!stringify) {
            storage.setItem(key, value);
        } else {
            storage.setItem(key, JSON.stringify(value));
        }
    }
};