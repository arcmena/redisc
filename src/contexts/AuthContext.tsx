import * as React from 'react';
import { createContext, useState } from 'react';
import Cookies from 'js-cookie';

// Interfaces
import { IAuthContext } from '../types/ContextProps';
import { User } from '../types/EntityTypes';

// GraphQL hooks
import { useLoginMutation } from '../gql/login.graphql';
import { refreshToken } from '../utils/api';

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
                setLogged(true);
                return resp.data.auth;
            })
            .catch((error) => error.message);

        return res;
    };

    const validateToken = async (): Promise<void> => {
        try {
            const token = await refreshToken();
            if (token.accessToken !== '') {
                Cookies.set('disker', token.accessToken);
                return setLogged(true);
            }
            return setLogged(false);
        } catch (error) {
            throw new Error(error);
        }
    };

    const providerValue = {
        login,
        logged,
        validateToken,
    };

    return (
        <AuthContext.Provider value={providerValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
