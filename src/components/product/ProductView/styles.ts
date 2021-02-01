import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;

    ${({ theme: { mixins } }) => mixins.fit}
`;

export const ProductViewRoot = styled.div`
    position: relative;
    display: grid;
    align-items: flex-start;
    grid-gap: 2rem;
    gap: 2rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    overflow-x: hidden;

    ${({ theme: { mixins } }) => mixins.fit}

    @media (min-width: 1024px) {
        grid-template-columns: repeat(12, minmax(0, 1fr));
    }
`;

export const ProductDisplay = styled.div`
    grid-column: span 6 / span 6;

    height: 100%;
    width: 100%;
`;

export const ProductInfo = styled.div`
    grid-column: span 1 / span 1;

    height: 100%;
    width: 100%;

    padding: 1.5rem;

    @media (min-width: 1024px) {
        grid-column: span 6 / span 6;
        padding-top: 6rem;
        padding-bottom: 6rem;
        justify-content: space-between;
    }
`;
