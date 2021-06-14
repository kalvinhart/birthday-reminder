import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    :root {
        --clr-primary: #fd746c;
        --box-shadow: 0 0 4px 4px rgba(253, 116, 108, 0.2);
        --header-height: 50px;
    }

    html {
        box-sizing: border-box;
    }

    body {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Open Sans, sans-serif;
        font-size: 16px;
    }
 `;

export default GlobalStyle;
