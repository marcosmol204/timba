import { LocalStorageRepository } from './LocalStorageRepository';
import { SessionStorageRepository } from './SessionStorageRepository';


export type TTimbaRepository = LocalStorageRepository | SessionStorageRepository

export type TTimbaRepositories = "localStorage" | "sessionStorage";