import { LocalStorageRepository, SessionStorageRepository } from ".";


export type TTimbaRepository = LocalStorageRepository | SessionStorageRepository

export type TTimbaRepositories = "localStorage" | "sessionStorage";