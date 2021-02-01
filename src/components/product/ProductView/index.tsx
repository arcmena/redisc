import { Product } from '../../../types/EntityTypes';

import {
    Container,
    ProductViewRoot,
    ProductDisplay,
    ProductInfo,
} from './styles';

interface ProductProps {
    product: Product;
}

const ProductView: React.FC<ProductProps> = ({
    product: { _id, band, image, name, value, category, description },
}) => {
    return (
        <Container>
            <ProductViewRoot>
                <ProductDisplay>
                    <div>
                        <h1>{name}</h1>
                        <h2>
                            {value.toLocaleString('en', {
                                style: 'currency',
                                currency: 'USD',
                            })}
                        </h2>
                    </div>
                    <div>
                        <img src={image} alt="cover" />
                    </div>
                </ProductDisplay>
                <ProductInfo>
                    <h2>{band}</h2>
                    <p>{description}</p>
                </ProductInfo>
            </ProductViewRoot>
        </Container>
    );
};

export default ProductView;
