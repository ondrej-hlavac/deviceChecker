import { StyledVariables } from 'sharedStyledComponents/StyledVariables';
import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
  height: 100%;

  .nav-wrapper {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 220px;
    top: ${StyledVariables.HEADER_HEIGHT};
    margin: 0;
    padding: 0;
    background-color: ${StyledVariables.COLOR_PURPLE};

    @media screen and (min-width: 718px) {
      position: relative;
      top: 0;
      flex-direction: row;
      height: 100%;
      width: auto;

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
      transition: all 0.3s ease;

      &:not(.user-name) {
        &:hover,
        &:focus,
        &:active {
          color: ${StyledVariables.COLOR_PURPLE};
          background-color: ${StyledVariables.COLOR_YELLOW};
        }
      }
    }
  }

  .navigation-toggler {
    width: 80px;
    height: 80px;
    background-color: transparent;
    border: none;
    margin-right: 16px;

    .circle {
      width: 80%;
      height: 80%;
      position: relative;
    }
    .line {
      position: absolute;
      height: 3px;
      width: 100%;
      left: 0;
      background: ${StyledVariables.COLOR_WHITE};
      transition: all cubic-bezier(0.26, 0.1, 0.27, 1.55) 0.35s;
    }

    .top {
      top: 18%;
    }
    .middle {
      top: 48%;
    }
    .bottom {
      top: 78%;
    }
    .icon.close .top {
      transform: rotate(45deg);
      top: 48%;
    }
    .icon.close .middle,
    .icon.close .bottom {
      transform: rotate(-45deg);
      top: 48%;
    }

    @media screen and (min-width: 718px) {
      display: none;
    }
  }
`;
