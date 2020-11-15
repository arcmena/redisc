import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
`;

export const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .ant-card {
        margin: 10px;
    }
`;
