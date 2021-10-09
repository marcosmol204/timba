import {
    SessionStorageRepository,
    LocalStorageRepository,
    TTimbaRepositories,
    TTimbaRepository,
} from '../repositories';

import { ITimba } from "./Itimba";


export class Timba implements ITimba {
    _id: string;
    private _repository: TTimbaRepository;

    constructor(id: string, repositoryType: TTimbaRepositories) {
        this._id = id;
        this._repository = this.createRepository(repositoryType);
    }

    private createRepository(type: TTimbaRepositories) {
        return type === 'sessionStorage' ? new SessionStorageRepository() : new LocalStorageRepository();
    }

    get(key: string): any {
        return this._repository.getItem(this._id, key)
    }

    set(key: string, value: any): void {
        return this._repository.setItem(this._id, key, JSON.stringify(value));
    }

    remove(key: string): void {
        return this._repository.removeItem(this._id, key);
    }

    clear(): void {
        return this._repository.clear(this._id);
    }

    getStorage(): any {
        return this._repository.getStorage(this._id);
    }
}