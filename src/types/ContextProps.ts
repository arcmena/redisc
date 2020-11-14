import { User } from './EntityTypes';

export interface IAuthContext {
    login: (data: User) => Promise<any>;
    logged: boolean;
    validateToken: () => Promise<void>;
}
