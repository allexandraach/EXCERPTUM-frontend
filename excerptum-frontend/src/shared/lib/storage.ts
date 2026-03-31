// export function getFromStorage(storage, key, parse = false) {
//     const item = storage.getItem(key);
//     return item ? (parse ? JSON.parse(item) : item) : undefined;
// }

// export function saveToStorage(storage, key, value, stringify = false) {
//     if (key && value) {
//         if (!stringify) {
//             storage.setItem(key, value);
//         } else {
//             storage.setItem(key, JSON.stringify(value));
//         }
//     }
// };