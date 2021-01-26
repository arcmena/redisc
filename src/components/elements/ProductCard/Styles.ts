import styled from 'styled-components';

export const CardInfo = styled.div`
    position: absolute;
    top: 0;
    right: 0;

    width: 100%;

    z-index: 3;

    div {
        h3 {
            padding-top: 1.1rem;

            span {
                letter-spacing: 0.4px;
                line-height: 2.2;
            }
        }

        > span {
            font-size: 1.6rem;
            line-height: 1.5rem;

            display: inline-block;
        }
    }
`;

export const CardImage = styled.div`
    display: block;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    margin: 0px;

    width: 100%;

    img {
        width: 100%;
        max-width: 100%;
    }
`;

export const CardBand = styled.div`
    position: absolute;
    z-index: 3;

    right: 0;

    h4 {
        margin-top: -3.9rem;
    }
`;

export const Container = styled.a`
    position: relative;
    max-height: 100%;
    width: 100%;

    transition: all 1s ease-in;

    span {
        padding: 2rem 2.5rem;
        background: ${({ theme }) => theme.colors.white};

        font-weight: 600;
    }

    &:hover span {
        background: black;
        color: ${({ theme }) => theme.colors.white};
    }
`;
