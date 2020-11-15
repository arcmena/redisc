import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
`;

export const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    div:not(:first-child) {
        margin-left: 10px;
    }
`;