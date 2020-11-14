/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import { useMemo } from 'react';
import {
    ApolloClient,
    InMemoryCache,
    NormalizedCacheObject,
} from '@apollo/client';

import { getToken } from '../utils/token';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

function createIsomorphLink() {
    console.log(getToken());

    const { HttpLink } = require('@apollo/client');
    return new HttpLink({
        uri: 'http://localhost:3030/api/v1/graphql',
        credentials: 'include',
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });
}

function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: createIsomorphLink(),
        cache: new InMemoryCache(),
    });
}

export function initializeApollo(
    initialState: any = null,
    // Pages with Next.js data fetching methods, like `getStaticProps`, can send
    // a custom context which will be used by `SchemaLink` to server render pages
) {
    const _apolloClient = apolloClient ?? createApolloClient();

    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // get hydrated here
    if (initialState) {
        _apolloClient.cache.restore(initialState);
    }
    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined') return _apolloClient;
    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient;

    return _apolloClient;
}

export function useApollo(initialState: any) {
    const store = useMemo(() => initializeApollo(initialState), [initialState]);
    return store;
}
