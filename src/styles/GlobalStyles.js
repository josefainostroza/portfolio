import { createGlobalStyle } from 'styled-components';
import './normalize.css';
export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        display: block;
    }

    ul {
        list-style: none;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    body{
        padding: 0;
        font-family: 'inter';
        height: 100%;
    width: 100%;
        /* background-color: ${({ colorFondo }) => colorFondo};  */
        transition: background-color 0.5s ease;
        overflow-x: hidden;
        background-color: #191919;

            min-height: 100%    
}  

h1,h2,p{
margin: 0;
}
`;
