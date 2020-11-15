export interface User {
    _id?: string;
    name?: string;
    email?: string;
    password?: string;
}

export interface IAuth {
    accessToken: string;
}

export interface Product {
    _id: string;
    name: string;
    description: string;
    value: number;
    category: string;
    image: string;
}

export interface ProductOverview {
    _id?: string;
    name?: string;
    value?: number;
    image?: string;
}
