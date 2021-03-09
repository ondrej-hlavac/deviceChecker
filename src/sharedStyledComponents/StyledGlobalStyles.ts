import { createGlobalStyle } from 'styled-components';
import { StyledVariables } from './StyledVariables';

export const StyledGlobalStyles = createGlobalStyle`
  /*
  BASIC FONT FAMILY SPEC 
  font-family: 'Libre Baskerville', serif;
  font-family: 'Libre Franklin', sans-serif; 
  */
  @import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;800&display=swap");

  // set padding behavior 
  * {
    box-sizing: border-box;
  }

  // default styles and reset
  body {
    margin: 0;
    padding: 0;
    font-family: "Libre Franklin", sans-serif;
    background-color: ${StyledVariables.COLOR_TURQUOISE};
    line-height: 1.8em;
  }

  // clear browser autofill input color
  input {
    filter: none;
  }

  // selected text highlight
  ::selection {
    color: ${StyledVariables.COLOR_PURPLE};
    background-color: ${StyledVariables.COLOR_YELLOW};
  }
`;
