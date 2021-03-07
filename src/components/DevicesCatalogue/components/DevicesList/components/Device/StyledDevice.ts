import { StyledVariables } from 'sharedStyledComponents/StyledVariables';
import styled from 'styled-components';

export const StyledDevice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 240px;
  padding: 1em 1em 2em;
  color: ${StyledVariables.COLOR_ORANGE};
  background-color: ${StyledVariables.COLOR_WHITE};

  .device-image {
    flex-grow: 1;
  }

  p {
    margin: 0;
  }
`;