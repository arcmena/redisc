import styled from 'styled-components';

export const HeaderComponent = styled.div`
    position: sticky;
    top: 0;
    z-index: 40;

    background: ${(props) => props.theme.colors.background};

    div {
        padding: 2.5rem 0;

        div {
            display: flex;
            justify-content: space-between;
            align-items: center;

            padding: 0 1.5rem;
        }
    }

    img {
        height: 30px;
        cursor: pointer;
    }
`;

export const Nav = styled.div`
    a {
        &:not(:last-child) {
            padding-right: 1rem;
        }
    }
`;
