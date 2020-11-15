import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }

    html {
        font-size: 62.5%;
    }

    body{
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
        font: 400 16px Roboto, sans-serif;

        > div {
            height: 100%;

            main{
                height: 100%;
            }
        }
    }
`;
