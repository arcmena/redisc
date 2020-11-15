/* eslint-disable no-underscore-dangle */
import React from 'react';
import Link from 'next/link';

import { Card } from './Styles';

import { ProductCardProps } from '../../../types/ElementProps';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
    <Link as={`/product/${product._id}`} href="/product/[_id]">
        <Card hoverable cover={<img src={product.image} alt="Product" />}>
            <div>
                <h3>{product.name}</h3>
                <span>{product.band ? product.band : 'Not specified'}</span>
                <h4>
                    {product.value.toLocaleString('en', {
                        style: 'currency',
                        currency: 'USD',
                    })}
                </h4>
            </div>
        </Card>
    </Link>
);

export default ProductCard;
