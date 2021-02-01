/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { useContext } from 'react';
import Head from 'next/head';

// Queries
import { useProductsQuery } from '../gql/products.graphql';

// Contexts
import { AuthContext } from '../contexts/AuthContext';

// Components
import ProtectedRoute from '../components/layouts/partials/ProtectedRoute';
import ProductCard from '../components/product/ProductCard';

// Styles
import { Container, Sidebar, ProductsContainer } from '../styles/pages/Home';

const Home: React.FC = () => {
    const { logged } = useContext(AuthContext);

    // Queries
    const { data, loading } = useProductsQuery();

    if (loading || !data) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Head>
                <title>Redisc | We the best music!</title>
            </Head>
            <Container>
                {/* <ProtectedRoute />
            {logged && <p>You are Logged!</p>} */}
                <Sidebar order={1}>
                    <h3>
                        <a href="#">All categories</a>
                    </h3>
                    <ul>
                        <li>
                            <a href="#">Indie</a>
                        </li>
                        <li>
                            <a href="#">Rock</a>
                        </li>
                        <li>
                            <a href="#">Trap</a>
                        </li>
                        <li>
                            <a href="#">Rap</a>
                        </li>
                        <li>
                            <a href="#">Lo-Fi</a>
                        </li>
                    </ul>
                </Sidebar>
                <ProductsContainer>
                    {data.productsIndex.map((item) => (
                        <ProductCard key={item._id} product={item} />
                    ))}
                </ProductsContainer>
                <Sidebar order={2}>
                    <h3>
                        <a href="#">Relevance</a>
                    </h3>
                    <ul>
                        <li>
                            <a href="#">Latest arrivals</a>
                        </li>
                        <li>
                            <a href="#">Trending</a>
                        </li>
                        <li>
                            <a href="#">Price: Low to high</a>
                        </li>
                        <li>
                            <a href="#">Price: High to low</a>
                        </li>
                    </ul>
                </Sidebar>
            </Container>
        </>
    );
};

export default Home;
