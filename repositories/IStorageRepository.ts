export interface IStorageRepository {
    [name: string]: any;

    getStorage(id: string): string;

    updateStorage(id: string, storage: string): void;

    /* When passed a key name, will return that key's value. */
    getItem(id: string, key: string): string | null;

    /* When passed a key name and value, will add that key to the storage,
     or update that key's value if it already exists. */
    setItem(id: string, key: string, value: string): void;

    /* When passed a key name, will remove that key from the storage. */
    removeItem(id: string, key: string): void;

    /* When invoked, will empty all keys out of the storage. */
    clear(id: string): void;
}