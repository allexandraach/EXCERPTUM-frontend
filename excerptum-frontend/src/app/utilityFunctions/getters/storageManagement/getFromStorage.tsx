export function getFromStorage(storage, key, parse = false) {
    const item = storage.getItem(key);
    return item ? (parse ? JSON.parse(item) : item) : undefined;
}