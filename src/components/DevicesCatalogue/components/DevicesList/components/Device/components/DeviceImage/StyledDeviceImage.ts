import { StyledVariables } from 'sharedStyledComponents/StyledVariables';
import styled from 'styled-components';

export const StyledDeviceImage = styled.div`
  position: relative;
  display: block;
  height: 100%;
  text-align: center;

  .device-image {
    object-fit: cover;
    object-position: center center;
  }

  .image-fallback {
    display: block;
    height: 100%;
    width: 100%;
    padding: 3em;
    border: 1px solid ${StyledVariables.COLOR_LIGHTBROWN};
  }
`;