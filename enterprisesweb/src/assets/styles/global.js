import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html, body, #root {
    min-height: 100%;
    }

    body {
    background: beige;
    -webkit-font-smoothing : antialiaded !important;
    }

    button {
    cursor: pointer;
    }

    ::-webkit-scrollbar-track {
    background: rgba(145, 145, 120, 0.5);
    }

    ::-webkit-scrollbar {
    width: 4px;
    background: rgba(145, 145, 120, 0.5);
    }

    ::-webkit-scrollbar-thumb {
    background: rgba(238, 76, 119, 0.5);
    }

    a {
      text-decoration: none;
    }
`;
