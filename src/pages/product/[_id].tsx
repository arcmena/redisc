/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { request, gql } from 'graphql-request';

import { Product } from '../../types/EntityTypes';

import ProductView from '../../components/product/ProductView';

interface ProductProps {
    product: Product;
}

const ProductPage: React.FC<ProductProps> = ({ product }) => {
    return <ProductView product={product} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
    const query = gql`
        {
            productsIndex {
                _id
            }
        }
    `;

    const res = await request(
        `${process.env.BACKEND_API_URL}/graphql`,
        query,
    ).then(({ productsIndex }) => productsIndex);

    return {
        paths: res.map((item: Product) => ({
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
                band
            }
        }
    `;

    const variables = {
        _id: params._id,
    };

    const res = await request(
        `${process.env.BACKEND_API_URL}/graphql`,
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
