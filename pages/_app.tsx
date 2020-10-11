import * as React from 'react';
import { AppProps } from 'next/app';
import { Head } from 'next/document';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import '../assets/styles/globals.scss';

const client = new ApolloClient({
    uri: 'http://localhost:3030/api/v1/graphql',
});

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
    <>
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
        </Head>
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    </>
);

export default MyApp;
