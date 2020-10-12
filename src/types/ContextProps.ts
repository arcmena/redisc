import { User } from './EntityTypes';

export interface IAuthContext {
    user: User;
    accessToken: string;
    login: (data: User) => Promise<any>;
    checkToken: () => void;
    logged: boolean;
}
