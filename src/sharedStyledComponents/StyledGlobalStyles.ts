import { createGlobalStyle } from 'styled-components';

export const StyledGlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;1,900&display=swap");

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Raleway", sans-serif;
    line-height: 1.8em;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-style: italic;
    font-weight: 900;
  }

  ::-moz-selection {
    /* Code for Firefox */
    color: red;
    background: yellow;
  }

  ::selection {
    color: red;
    background: yellow;
  }

  /* TODO: firefox & edge workaround */
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #9acd32;
  }

  ::-webkit-scrollbar {
    width: 6px;
    background-color: yellowgreen;
  }

  ::-webkit-scrollbar-thumb {
    background-color: coral;
  }
`;
