/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import '../assets/styles/globals.scss';
import 'antd/dist/antd.css';

// Contexts
import AuthProvider from '../contexts/AuthContext';

// Components
import DefaultLayout from '../components/layouts/App';

import { AppType } from '../types/AppType';

import withApolloClient from '../lib/withApolloHook';

const MyApp: React.FC<AppType> = ({ Component, apolloClient, pageProps }) => (
    <>
        <ApolloProvider client={apolloClient}>
            <AuthProvider>
                <DefaultLayout>
                    <Component {...pageProps} />
                </DefaultLayout>
            </AuthProvider>
        </ApolloProvider>
    </>
);

export default withApolloClient(MyApp);
