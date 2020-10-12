let cookie;

export const setToken = (token: string): void => {
    cookie = token;
};

export const getToken = (): string => {
    return cookie;
};
