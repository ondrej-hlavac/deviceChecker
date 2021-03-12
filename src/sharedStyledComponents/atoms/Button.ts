import { StyledVariables } from 'sharedStyledComponents/StyledVariables';
import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  width: 100%;
  height: ${StyledVariables.BUTTON_HEIGHT};
  font: ${StyledVariables.FONT_HEADLINE};
  font-size: 16px;
  text-transform: uppercase;
  outline: none;
  box-shadow: none;
  letter-spacing: 0.1rem;
  border: 1px solid ${StyledVariables.COLOR_PURPLE};
  color: ${StyledVariables.COLOR_WHITE};
  background-color: ${StyledVariables.COLOR_PURPLE};
  cursor: pointer;

  &:hover {
    color: ${StyledVariables.COLOR_PURPLE};
    background-color: ${StyledVariables.COLOR_YELLOW};
  }
`;
