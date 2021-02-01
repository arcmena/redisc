import { Product } from '../../../types/EntityTypes';
import Button from '../../ui/Button';

import {
    Container,
    ProductViewRoot,
    ProductDisplay,
    ProductName,
    Image,
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
                    <ProductName>
                        <h1>
                            <span>{name}</span>
                        </h1>
                        <h2>
                            <span>
                                {value.toLocaleString('en', {
                                    style: 'currency',
                                    currency: 'USD',
                                })}{' '}
                                USD
                            </span>
                        </h2>
                    </ProductName>
                    <Image>
                        <img src={image} alt="cover" />
                    </Image>
                </ProductDisplay>
                <ProductInfo>
                    <section>
                        <h2>{band}</h2>
                        <p>{description}</p>
                    </section>
                    <div>
                        <Button>Add to cart</Button>
                    </div>
                </ProductInfo>
            </ProductViewRoot>
        </Container>
    );
};

export default ProductView;
