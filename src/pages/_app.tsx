import * as React from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import ApolloServer from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import '../assets/styles/globals.scss';

// Contexts
import AuthProvider from '../contexts/AuthContext';

// Components
import App from '../components/layouts/App';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';

// Utils
import { getToken } from '../utils/token';
import { refreshToken } from '../utils/api';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        refreshToken().then(() => {
            setLoading(false);
        });
    }, []);

    const client = new ApolloServer({
        credentials: 'include',
        uri: 'http://localhost:3030/api/v1/graphql',
        request: (operation) => {
            const accessToken = getToken();
            if (accessToken) {
                operation.setContext({
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
            }
        },
    });

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
                        {!loading ? (
                            <Component {...pageProps} />
                        ) : (
                            <div>loading...</div>
                        )}
                    </App>
                    <Footer />
                </AuthProvider>
            </ApolloProvider>
        </>
    );
};

export default MyApp;
