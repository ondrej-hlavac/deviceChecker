import { StyledVariables } from 'sharedStyledComponents/StyledVariables';
import styled from 'styled-components';

export const StyledDeviceImage = styled.div`
  position: relative;
  display: block;
  text-align: center;
  flex-grow: 1;

  .device-image {
    max-width: 250px;
    height: 100%;
    object-fit: contain;
    /* object-position: center center; */
  }

  .image-fallback {
    display: block;
    height: 100%;
    width: 100%;
    padding: 3em;
    border: 1px solid ${StyledVariables.COLOR_LIGHTBROWN};
  }
`;
