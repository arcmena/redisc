import * as React from 'react';
import Head from 'next/head';
import { useHelloQuery } from '../types/graphql';
import App from '../components/layouts/App';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';

const Home: React.FC = () => {
    const { data, loading } = useHelloQuery();

    if (loading || !data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Head>
                <title>Redisc</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <App>{data.hello}</App>
            <Footer />
        </div>
    );
};

export default Home;
