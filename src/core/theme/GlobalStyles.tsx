import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html{
    font-size:62.5%;
  }
  
  h1 {
    font-family: JetBrainsMonoBold, "sans-serif";
  }

  p, ul, li, button {
    font-family: JetBrainsMonoBold, "sans-serif";
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  button {
    border: 0;
    padding: 0;
    cursor: pointer;
  }
`;