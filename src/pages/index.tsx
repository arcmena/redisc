/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { useContext } from 'react';
import Link from 'next/link';

// Queries
import { useProductsQuery } from '../gql/products.graphql';

// Contexts
import { AuthContext } from '../contexts/AuthContext';

// Components
import ProtectedRoute from '../components/layouts/partials/ProtectedRoute';
import ProductCard from '../components/elements/ProductCard/ProductCard';

// Styles
import { Container, ProductsContainer } from '../styles/pages/Home';

const Home: React.FC = () => {
    const { logged } = useContext(AuthContext);

    // Queries
    const { data, loading } = useProductsQuery();

    if (loading || !data) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <ProtectedRoute />
            {logged && <p>You are Logged!</p>}
            <ProductsContainer>
                {data.productsIndex.map((item) => (
                    <ProductCard key={item._id} product={item} />
                ))}
            </ProductsContainer>

            <br />

            <Link as="/account/register" href="/account/register">
                Create an Account
            </Link>

            <br />

            <Link as="/account/login" href="/account/login">
                Login
            </Link>
        </Container>
    );
};

export default Home;
