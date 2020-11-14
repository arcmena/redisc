/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';

import '../assets/styles/globals.scss';

// Contexts
import AuthProvider from '../contexts/AuthContext';

// Components
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';

import withApolloClient from '../lib/withApolloHook';
import { AppType } from '../types/AppType';

class MyApp extends App<AppType> {
    render() {
        const { Component, pageProps, apolloClient } = this.props;

        return (
            <>
                <ApolloProvider client={apolloClient}>
                    <AuthProvider>
                        <Header />
                        <Component {...pageProps} />
                        <Footer />
                    </AuthProvider>
                </ApolloProvider>
            </>
        );
    }
}

export default withApolloClient(MyApp);
