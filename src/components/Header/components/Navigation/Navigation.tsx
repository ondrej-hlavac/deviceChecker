import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context as UserContext } from 'context/UserContext';
import { routes } from 'constants/routes';
import { StyledNavigation } from './StyledNavigation';

const Navigation = () => {
  const { user } = useContext(UserContext);
  console.log('🚀 ~ file: Navigation.tsx ~ line 10 ~ Navigation ~ user', user);

  return (
    <StyledNavigation>
      <button type="button" className="navigation-toggler">
        <div className="circle icon">
          <span className="line top" />
          <span className="line middle" />
          <span className="line bottom" />
        </div>
      </button>
      {/* Admin only action */}
      <ul className="nav-wrapper">
        <li className="nav-link-wrapper">
          <Link className="nav-link" to={routes.CREATE_DEVICE}>
            Create Device
          </Link>
        </li>
        <li className="nav-link-wrapper">
          <span className="nav-link user-name">user@loged.in</span>
        </li>
        <li className="nav-link-wrapper">
          <Link className="nav-link" to={routes.LOG_IN}>
            Login / Logout
          </Link>
        </li>
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
