import { TimbaRepository } from "./TimbaRepository";

export class SessionStorageRepository extends TimbaRepository {
    getStorage(id: string): string {
        return window.sessionStorage.getItem(id) || "{}";
    }
    updateStorage(id: string, storage: string) {
        return window.sessionStorage.setItem(id, storage);
    }
}
