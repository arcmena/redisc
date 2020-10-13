import axios from 'axios';

import { setToken } from './token';

export const api = axios.create({
    baseURL: 'http://localhost:3030/api/v1',
});

/* eslint-disable import/prefer-default-export */
export const refreshToken = () => {
    // const response = fetch('http://localhost:3030/api/v1/refresh_token', {
    //     method: 'POST',
    //     credentials: 'include',
    // })
    //     .then(async (res) => {
    //         const token = await res.json();
    //         return token.accessToken;
    //     })
    //     .catch((error) => console.error(error));

    // return response;

    api.post('/refresh_token', {
        withCredentials: true,
    }).then((res) => console.log(res));
};
