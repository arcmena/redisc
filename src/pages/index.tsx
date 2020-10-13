/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { useContext } from 'react';
import Link from 'next/link';

import { useProductsQuery, ProductsDocument } from '../lib/products.graphql';

// Contexts
import { AuthContext } from '../contexts/AuthContext';

import ProtectedRoute from '../components/layouts/partials/ProtectedRoute';
import { initializeApollo } from '../lib/apollo';

const Home: React.FC = () => {
    const { logged } = useContext(AuthContext);

    // Queries
    const { data, loading } = useProductsQuery();

    if (loading || !data) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div>
                <ProtectedRoute />
                {logged && <p>You are Logged!</p>}
                <div className="products">
                    {data.products.map((item) => (
                        <Link
                            as={`/product/${item._id}`}
                            href="/product/[_id]"
                            key={item._id}
                        >
                            <div className="product">
                                <img src={item.image} alt="item" />
                                <h4>{item.name}</h4>
                                <span>R$: {item.value}</span>
                            </div>
                        </Link>
                    ))}
                </div>

                <br />

                <Link as="/account/register" href="/account/register">
                    Create an Account
                </Link>

                <br />

                <Link as="/account/login" href="/account/login">
                    Login
                </Link>
            </div>
        </>
    );
};

export const getStaticProps = async () => {
    const apolloClient = initializeApollo();

    await apolloClient.query({
        query: ProductsDocument,
    });

    return {
        props: {
            initialApolloState: apolloClient.cache.extract(),
        },
    };
};

export default Home;
