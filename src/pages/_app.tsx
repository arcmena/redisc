import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';

import '../assets/styles/globals.scss';

// Contexts
import AuthProvider from '../contexts/AuthContext';

// Apollo Starter
import { useApollo } from '../lib/apolloClient';

// Components
import App from '../components/layouts/App';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    const apolloClient = useApollo(pageProps.initialApolloState);

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>Redisc - The right place for nostalgia!</title>
                <link rel="icon" href="../public/favicon.ico" />
            </Head>
            <ApolloProvider client={apolloClient}>
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
