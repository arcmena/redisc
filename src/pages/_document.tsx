import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap"
                        rel="stylesheet"
                    />
                    <meta charSet="utf-8" />
                    <meta name="theme-color" content="#000000" />
                    <link rel="icon" href="../public/favicon.ico" />
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
