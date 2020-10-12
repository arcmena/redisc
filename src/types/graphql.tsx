import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export type Query = {
    __typename?: 'Query';
    users: Array<UserTypes>;
    hello: Scalars['String'];
    protected: Scalars['String'];
};

export type UserTypes = {
    __typename?: 'UserTypes';
    _id: Scalars['ID'];
    name: Scalars['String'];
    email: Scalars['String'];
};

export type Mutation = {
    __typename?: 'Mutation';
    register: Scalars['Boolean'];
    auth: LoginResponse;
};

export type MutationRegisterArgs = {
    password: Scalars['String'];
    email: Scalars['String'];
    name: Scalars['String'];
};

export type MutationAuthArgs = {
    password: Scalars['String'];
    email: Scalars['String'];
};

export type LoginResponse = {
    __typename?: 'LoginResponse';
    accessToken: Scalars['String'];
};

export type HelloQueryVariables = Exact<{ [key: string]: never }>;

export type HelloQuery = { __typename?: 'Query' } & Pick<Query, 'hello'>;

export const HelloDocument = gql`
    query Hello {
        hello
    }
`;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(
    baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>,
) {
    return Apollo.useQuery<HelloQuery, HelloQueryVariables>(
        HelloDocument,
        baseOptions,
    );
}
export function useHelloLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>,
) {
    return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(
        HelloDocument,
        baseOptions,
    );
}
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = Apollo.QueryResult<
    HelloQuery,
    HelloQueryVariables
>;
