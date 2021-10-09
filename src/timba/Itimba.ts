export interface ITimba {

    get(key: string): any;

    set(key: string, value: any): void;

    remove(key: string): void;

    clear(): void;

    getStorage(): any;

}
