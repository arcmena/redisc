import * as React from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import { ApolloProvider, ApolloClient } from '@apollo/client';

import '../assets/styles/globals.scss';

// Contexts
import AuthProvider from '../contexts/AuthContext';

// Components
import App from '../components/layouts/App';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';

// Initialize Apollo
import { useApollo } from '../lib/apollo';

import { refreshToken } from '../utils/api';

import { getToken } from '../utils/token';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    const client = useApollo(pageProps.initialApolloState);

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <ApolloProvider client={client}>
                <AuthProvider>
                    <Header />
                    <App>
                        <Component {...pageProps} />
                    </App>
                    <Footer />
                </AuthProvider>
            </ApolloProvider>
        </>
    );
};

export default MyApp;
