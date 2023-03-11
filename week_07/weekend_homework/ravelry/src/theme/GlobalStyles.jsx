import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    button {
        padding: 1rem 2rem;
        font-size: 1rem;
        font-weight: 600;
        border-radius: 50px;
        background-color: ${({ theme }) => theme.colours.contrast2};
        border: none;
        color: whitesmoke;
    }
    body {
        margin: 0;
        background-color: ${({ theme }) => theme.colours.background};
        text-align: center;
        font-family: 'Righteous', cursive;
        letter-spacing: 0.25rem;
    }
`;

export default GlobalStyle;
