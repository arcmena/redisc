import * as React from 'react';
import Head from 'next/head';
import { useHelloQuery } from '../types/graphql';

const Home: React.FC = () => {
    const { data, loading } = useHelloQuery();

    if (loading || !data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>{data.hello}</main>

            <footer>
                <h1>futer</h1>
            </footer>
        </div>
    );
};

export default Home;
