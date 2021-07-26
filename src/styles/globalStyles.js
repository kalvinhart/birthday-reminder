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
        --clr-secondary: #ff8c86;
        --box-shadow: 2px 2px 6px 4px rgba(0, 0, 0, 0.1);
        --box-shadow-bottom: 0 2px 6px 4px rgba(0, 0, 0, 0.1);
        --header-height: 50px;
        --gradient: linear-gradient(to bottom, rgb(255, 140, 134), rgb(253, 116, 108));
    }

    html {
        box-sizing: border-box;
    }

    body {
        min-height: 100vh;
        background-color: #fafafa;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Open Sans, sans-serif;
        font-size: 16px;
        color: var(--clr-primary);
    }

    input,
    input::-webkit-input-placeholder  {
        font: inherit;
        color: inherit;
    }
    
    input::-webkit-input-placeholder {
            font-size: 12px;
    }

    input {
        width: 200px;
  padding: 5px 10px;
  border: 1px solid grey;
  border-radius: 10px;

  &:focus {
    outline: none;
    box-shadow: var(--box-shadow);
  }
    }
 `;

export default GlobalStyle;
