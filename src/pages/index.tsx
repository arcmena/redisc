import * as React from 'react';
import { useContext } from 'react';
import Link from 'next/link';
import { useHelloQuery } from '../types/graphql';
import { AuthContext } from '../contexts/AuthContext';

const Home: React.FC = () => {
    const { logged } = useContext(AuthContext);
    const { data, loading } = useHelloQuery();

    if (loading || !data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {logged && <p>You are Logged!</p>}
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
