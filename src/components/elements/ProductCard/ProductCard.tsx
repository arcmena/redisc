/* eslint-disable no-underscore-dangle */
import React from 'react';
import Link from 'next/link';

import { Card, CardMeta } from './Styles';

import { ProductCardProps } from '../../../types/ElementProps';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
    <Link as={`/product/${product._id}`} href="/product/[_id]">
        <Card hoverable cover={<img src={product.image} alt="Product" />}>
            <CardMeta title={product.name} />
        </Card>
    </Link>
);

export default ProductCard;
