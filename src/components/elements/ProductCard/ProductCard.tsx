/* eslint-disable no-underscore-dangle */
import React from 'react';

import { Container, CardInfo, CardImage, CardBand } from './Styles';

import { ProductCardProps } from '../../../types/ElementProps';

const ProductCard: React.FC<ProductCardProps> = ({
    product: { _id, band, image, name, value },
}) => (
    <Container href={`/product/${_id}`}>
        <CardInfo>
            <div>
                <h3>
                    <span>{name}</span>
                </h3>
                <span>
                    {value.toLocaleString('en', {
                        style: 'currency',
                        currency: 'USD',
                    })}
                </span>
            </div>
        </CardInfo>
        <CardImage>
            <img src={image} alt={name} />
        </CardImage>
        <CardBand>
            <h4>
                <span>{band}</span>
            </h4>
        </CardBand>
    </Container>
);

export default ProductCard;
