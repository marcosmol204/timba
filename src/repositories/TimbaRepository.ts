import { IStorageRepository } from "./IStorageRepository";

export abstract class TimbaRepository implements IStorageRepository {
    [name: string]: any;

    abstract getStorage(id: string): string;
    abstract updateStorage(id: string, storage: string): void;

    getItem(id: string, key: string): string | null {
        const storage = { ...JSON.parse(this.getStorage(id)) };
        return storage.hasOwnProperty(key) ? JSON.stringify(storage[key]) : null;
    }
    setItem(id: string, key: string, value: string): void {
        const storage = { ...JSON.parse(this.getStorage(id)) };
        storage[key] = value;
        return this.updateStorage(id, JSON.stringify(storage));
    }
    removeItem(id: string, key: string) {
        const storage = { ...JSON.parse(this.getStorage(id)) };
        delete storage[key];
        return this.updateStorage(id, JSON.stringify(storage))
    }
    clear(id: string) {
        const emptyObject = {};
        return this.updateStorage(id, JSON.stringify(emptyObject))
    }
}
