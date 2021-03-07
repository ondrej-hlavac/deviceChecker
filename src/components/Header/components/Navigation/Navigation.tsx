import React from 'react';
import { StyledNavigation } from './StyledNavigation';

const Navigation = () => {
  return (
    <StyledNavigation>
      {/* <button type="button" className="navigation-toggler">
        <div id="hamburger" className="circle icon false">
          <span className="line top"></span>
          <span className="line middle"></span>
          <span className="line bottom"></span>
        </div>
      </button> */}
      <ul className="nav-wrapper">
        <li className="nav-link-wrapper">
          <a className="nav-link" href="#">
            Create Device
          </a>
        </li>
        <li className="nav-link-wrapper">
          <span className="nav-link user-name">user@loged.in</span>
        </li>
        <li className="nav-link-wrapper">
          <a className="nav-link" href="#">
            Login / Logout
          </a>
        </li>
      </ul>
      {/* Admin only action */}
    </StyledNavigation>
  );
};

export default Navigation;
