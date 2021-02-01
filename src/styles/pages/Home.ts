import styled from 'styled-components';

interface SidebarProp {
    order: number;
}

export const Container = styled.div`
    height: 100%;

    padding: 1.5rem 4rem 4rem;

    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-gap: 1rem;
    gap: 1rem;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;

export const Sidebar = styled('div')<SidebarProp>`
    grid-column: span 2 / span 2;

    letter-spacing: 0.04em;

    h3 {
        font-size: 1.8rem;
        font-weight: 600;

        padding: 0.5rem 1rem;
    }

    li {
        font-size: 1.6rem;

        padding: 0.7rem 1rem;
    }

    @media (max-width: 1024px) {
        order: ${({ order }) => order};
    }
`;

export const ProductsContainer = styled.div`
    grid-column: span 8 / span 8;

    display: grid;

    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    grid-gap: 0.75rem;
    gap: 0.75rem;

    a {
        min-height: 300px;
    }

    @media (max-width: 1024px) {
        grid-column: span 1 / span 1;
        order: 3;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;
