import * as React from 'react';
import Link from 'next/link';
import { useHelloQuery } from '../types/graphql';

const Home: React.FC = () => {
    const { data, loading } = useHelloQuery();

    if (loading || !data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{data.hello}</h2>
            <Link as="/account/register" href="/account/register">
                Create an Account
            </Link>

            <br />

            <Link as="/account/login" href="/account/login">
                Login
            </Link>
        </div>
    );
};

export default Home;
