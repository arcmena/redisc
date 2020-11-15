import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;

    display: flex;

    padding: 2rem;
`;

export const SidebarContainer = styled.div`
    padding-right: 1.5rem;

    min-width: 20rem;
`;

export const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .ant-card {
        margin: 10px;
    }
`;
