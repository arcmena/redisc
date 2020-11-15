/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { useContext } from 'react';

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
        </Container>
    );
};

export default Home;
