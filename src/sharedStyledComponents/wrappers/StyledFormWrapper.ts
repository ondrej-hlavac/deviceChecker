import { StyledVariables } from 'sharedStyledComponents/StyledVariables';
import styled from 'styled-components';

export const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  border: 1px solid ${StyledVariables.COLOR_LIGHTBROWN};
  background-color: ${StyledVariables.COLOR_WHITE};
`;