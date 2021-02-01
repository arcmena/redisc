/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/globalStyles';
import theme from '../styles/theme';

// Contexts
import AuthProvider from '../contexts/AuthContext';

// Components
import DefaultLayout from '../components/layouts/App';

import { AppType } from '../types/AppType';

import withApolloClient from '../lib/withApolloHook';

const MyApp: React.FC<AppType> = ({ Component, apolloClient, pageProps }) => (
    <ThemeProvider theme={theme}>
        <ApolloProvider client={apolloClient}>
            <AuthProvider>
                <GlobalStyle />
                <DefaultLayout>
                    <Component {...pageProps} />
                </DefaultLayout>
            </AuthProvider>
        </ApolloProvider>
    </ThemeProvider>
);

export default withApolloClient(MyApp);
