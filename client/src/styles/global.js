import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0; margin: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased !important;
        text-rendering: optimizeLegibility !important;
        display: flex;
        justify-content: center;
        padding: 20px;
    }

    h1 {
        margin-bottom: 20px;
    }
`;

export default GlobalStyle;
