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

    position: relative;

    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
`;

export const ProductName = styled.div`
    position: absolute;

    top: 1.5rem;
    left: 0;
    z-index: 20;
    padding-right: 4rem;

    h1 {
        font-size: 2.7rem;
    }

    h2 {
        font-size: 2rem;
    }

    span {
        padding: 2rem 2.5rem;
        background: ${({ theme }) => theme.colors.white};

        color: ${({ theme }) => theme.colors.black};

        font-weight: 700;
        display: inline-block;
    }

    @media (min-width: 1024px) {
        left: 1.5rem;
        padding-right: 4rem;
    }
`;

export const Image = styled.div`
    height: 100%;
    width: 100%;

    img {
        height: 100%;
        width: 100%;
    }
`;

export const ProductInfo = styled.div`
    grid-column: span 1 / span 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
    width: 100%;

    padding: 1.5rem;

    section {
        color: ${({ theme }) => theme.colors.black};

        p {
            margin: 5rem 0;
            font-size: 1.8rem;
        }
    }

    div {
        max-width: 300px;
    }

    @media (min-width: 1024px) {
        grid-column: span 6 / span 6;
        padding-top: 6rem;
        padding-bottom: 6rem;
        justify-content: space-between;
    }
`;
