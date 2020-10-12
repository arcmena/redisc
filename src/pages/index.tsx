import * as React from 'react';
import { useContext } from 'react';
import Link from 'next/link';

// GraphQL Hooks
import { useHelloQuery } from '../types/graphql';

// Contexts
import { AuthContext } from '../contexts/AuthContext';

import ProtectedRoute from '../components/layouts/partials/ProtectedRoute';

const Home: React.FC = () => {
    const { logged } = useContext(AuthContext);

    // Queries
    const { data, loading } = useHelloQuery();

    if (loading || !data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <ProtectedRoute />
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
