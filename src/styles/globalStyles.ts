import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body{
        width: 100%;
        height: 100%;
    }

    html {
        font-size: 62.5%;
    }

    body{
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.black};
        font: 400 16px Roboto, sans-serif;
        color: #2D2E30;

        > div {
            height: 100%;

            main{
                min-height: calc(100% - 160px);
            }
        }

        ol, ul {
            list-style: none;
        }

        a {
            text-decoration: none;
            color: #2D2E30;
        }
    }
`;
