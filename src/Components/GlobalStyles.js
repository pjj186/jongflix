import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body {
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:12px;
        background-color: rgba(20, 20, 20, 1);
        color: white;
        padding-top: 50px;
        overflow-y: scroll;
        &::-webkit-scrollbar {
            height: 8px;
            width: 5px;
            border-radius: 6px;
            background: rgba(0, 0, 0, 0.8);
        }
        &::-webkit-scrollbar-thumb {
            background-color: rgba(255, 255, 255, 0.4);
            border-radius: 6px;
        }
    }
`;

export default GlobalStyles;
