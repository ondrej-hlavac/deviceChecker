import { StyledVariables } from 'sharedStyledComponents/StyledVariables';
import styled from 'styled-components';

export const StyledDevice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 240px;
  padding: 1em;
  border: 1px solid ${StyledVariables.COLOR_LIGHTBROWN};
  color: ${StyledVariables.COLOR_ORANGE};
  background-color: ${StyledVariables.COLOR_WHITE};

  &:hover {
    border-color: ${StyledVariables.COLOR_YELLOW};
  }

  .device-image {
    max-width: 100%;
  }

  .device-name {
    margin-bottom: 8px;
    max-width: 100%;
    font-size: 24px;
  }

  p {
    margin: 0 0 8px;
  }
`;
