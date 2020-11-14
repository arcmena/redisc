import * as React from 'react';
import { createContext, useState } from 'react';

// Interfaces
import { IAuthContext } from '../types/ContextProps';
import { User } from '../types/EntityTypes';

// GraphQL hooks
import { useLoginMutation } from '../lib/login.graphql';

import { setToken } from '../utils/token';

export const AuthContext = createContext({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
    // Global States
    const [logged, setLogged] = useState(false);

    const [auth] = useLoginMutation();

    const login = async (data: User) => {
        const res = await auth({
            variables: {
                email: data.email,
                password: data.password,
            },
        })
            .then((resp) => {
                setToken(resp.data.auth.accessToken);
                setLogged(true);
                return resp.data.auth;
            })
            .catch((error) => error.message);

        return res;
    };

    const refreshToken = () => {
        fetch('http://localhost:3030/api/v1/refresh_token', {
            method: 'POST',
            credentials: 'include',
        })
            .then(async (res) => {
                const token = await res.json();
                setToken(token.accessToken);
            })
            .catch((error) => console.error(error));
    };

    const providerValue = {
        login,
        logged,
        refreshToken,
    };

    return (
        <AuthContext.Provider value={providerValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
