/* eslint-disable import/prefer-default-export */
import { setToken } from './token';

export const refreshToken = () => {
    const response = fetch('http://localhost:3030/api/v1/refresh_token', {
        method: 'POST',
        credentials: 'include',
    })
        .then(async (res) => {
            const token = await res.json();
            setToken(token.accessToken);
        })
        .catch((error) => console.error(error));

    return response;
};
