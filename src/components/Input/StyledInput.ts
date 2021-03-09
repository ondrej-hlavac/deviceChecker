import { StyledVariables } from 'sharedStyledComponents/StyledVariables';
import styled from 'styled-components';

// input wrapper
export const InputGroup = styled.div`
  position: relative;
  display: block;
  margin-bottom: 2em;
  height: ${StyledVariables.INPUT_HEIGHT};
`;

// input label
export const InputLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 8px;
  font-size: 18px;
  color: ${StyledVariables.COLOR_PURPLE};
  transition: all 300ms ease;
`;

// input field
export const InputField = styled.input`
  width: 100%;
  padding: 1em 3.4em;
  border: 1px solid ${StyledVariables.COLOR_PURPLE};
  border-color: transparent transparent ${StyledVariables.COLOR_PURPLE} transparent;
  text-align: center;
  font-size: 18px;
  color: ${StyledVariables.COLOR_BLACK};
  outline: none;

  &:focus {
    border: 1px solid ${StyledVariables.COLOR_TURQUOISE};
  }

  &:valid + ${InputLabel} {
    color: ${StyledVariables.COLOR_PURPLE};
  }

  &:invalid + ${InputLabel} {
    color: ${StyledVariables.COLOR_ORANGE};
  }

  &:focus + ${InputLabel} {
    background: ${StyledVariables.COLOR_WHITE};
    top: 2px;
    left: 8px;
    font-size:12px;
  }
`;
