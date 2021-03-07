import { StyledVariables } from 'sharedStyledComponents/StyledVariables';
import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  height: 100%;

  .nav-wrapper {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: ${StyledVariables.HEADER_HEIGHT};
    margin: 0;
    padding: 0;
    background-color: ${StyledVariables.COLOR_PURPLE};

    @media screen and (min-width: 718px) {
      position: relative;
      top: 0;
      flex-direction: row;

      .nav-link {
        height: 100%;
      }
    }

    .nav-link-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .nav-link {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1em 2em;
      text-decoration: none;
      color: ${StyledVariables.COLOR_WHITE};
      transition: all .3s ease;

      &:not(.user-name) {
        &:hover, &:focus, &:active {
          color: ${StyledVariables.COLOR_PURPLE};
          background-color: ${StyledVariables.COLOR_YELLOW};
        }
      }
    }
  }
`;