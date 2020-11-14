import * as React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { request, gql } from 'graphql-request';
import Link from 'next/link';

const ProductPage = ({ product }) => {
    return (
        <div className="product-page">
            <div>
                <Link as="/" href="/">
                    Back
                </Link>
                <div>
                    <img src={product.image} alt="cover" />
                </div>
                <div>
                    <h2>{product.name}</h2>
                    <h2>{product.value}</h2>
                </div>
            </div>
            <div>
                <h1>{product.description}</h1>
            </div>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const query = gql`
        {
            productsIndex {
                _id
                name
                description
                value
                category
                image
            }
        }
    `;
    const res = await request('http://localhost:3030/graphql', query).then(
        ({ productsIndex }) => productsIndex,
    );

    return {
        paths: res.map((item) => ({
            params: {
                _id: item._id,
            },
        })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = gql`
        query getProduct($_id: String!) {
            product(_id: $_id) {
                _id
                name
                description
                value
                category
                image
            }
        }
    `;

    const variables = {
        _id: params._id,
    };

    const res = await request(
        'http://localhost:3030/graphql',
        query,
        variables,
    ).then(({ product }) => product);

    return {
        props: {
            product: res,
        },
    };
};

export default ProductPage;
