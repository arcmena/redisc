/* eslint-disable react/prop-types */
import React from 'react';

import '../assets/styles/globals.scss';

const MyApp = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default MyApp;
