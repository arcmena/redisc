import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="icon" href="/favicon.ico" />
                    <meta charSet="utf-8" />
                    <meta name="theme-color" content="#000000" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
