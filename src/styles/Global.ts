import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizzing: border-box;
    font-family: sans-serif;
    color: white;
    text-align: center;
  }

  html {
    --scroll-behavior: smooth!important;
    scroll-behavior: smooth!important;
  }

  body {
    background-color: #010C15;
  }
`;
