/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppProps } from 'next/app';

export type AppType = {
    Component: AppProps['Component'];
    pageProps: AppProps['pageProps'];
    apolloClient: any;
};
