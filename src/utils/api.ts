/* eslint-disable no-return-await */
/* eslint-disable import/prefer-default-export */
import Axios from 'axios';

// Response Types
import { Token } from '../types/ResponseTypes';

const api = Axios.create({
    baseURL: process.env.BACKEND_API_URL,
    withCredentials: true,
});

export const refreshToken = async (): Promise<Token> => {
    return await api
        .post('/api/v1/refresh_token')
        .then(({ data }) => data)
        .catch((error) => {
            throw new Error(error);
        });
};
