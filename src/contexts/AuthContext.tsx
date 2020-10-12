import * as React from 'react';
import { createContext, useState, useEffect } from 'react';
import { get } from 'js-cookie';

// Interfaces
import { IAuthContext } from '../types/ContextProps';
import { User } from '../types/EntityTypes';

// GraphQL hooks
import { useLoginMutation } from '../types/graphql';

export const AuthContext = createContext({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
    // Global States
    const [logged, setLogged] = useState(false);
    const [user, setUser] = useState<User>(undefined);
    const [accessToken, setAccesToken] = useState<string>(undefined);

    // API Hooks
    const [auth] = useLoginMutation();

    const login = async (data: User) => {
        const res = await auth({
            variables: {
                email: data.email,
                password: data.password,
            },
        })
            .then((resp) => {
                setAccesToken(resp.data.auth.accessToken);
                return resp.data.auth;
            })
            .catch((error) => error.message);

        return res;
    };

    const checkToken = () => {
        const cookie = get('redisc');

        if (!cookie) return;

        setLogged(true);
    };

    const providerValue = {
        user,
        accessToken,
        login,
        checkToken,
        logged,
    };

    return (
        <AuthContext.Provider value={providerValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
