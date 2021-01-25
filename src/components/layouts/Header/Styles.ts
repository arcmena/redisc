import styled, { css } from 'styled-components';

export interface Props {
    hasScrolled: boolean;
}

export const HeaderComponent = styled('div')<Props>`
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

            padding: 0 2rem;
        }
    }

    img {
        height: 30px;
        cursor: pointer;
    }

    ${({ hasScrolled }) =>
        hasScrolled &&
        css`
            box-shadow: 0 30px 30px rgb(0 0 0 / 2%), 0 0 8px rgb(0 0 0 / 3%),
                0 1px 0 rgb(0 0 0 / 5%);
        `}
`;

export const Nav = styled.div`
    a {
        &:not(:last-child) {
            padding-right: 1rem;
        }

        color: ${(props) => props.theme.colors.primary_1};
    }
`;
