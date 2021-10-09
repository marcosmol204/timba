import { TimbaRepository } from "./TimbaRepository";

export class LocalStorageRepository extends TimbaRepository {

    getStorage(id: string): string {
        return window.localStorage.getItem(id) || "{}";
    }
    updateStorage(id: string, storage: string) {
        return window.localStorage.setItem(id, storage);
    }

}