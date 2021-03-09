import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context as UserContext } from 'context/UserContext';
import { routes } from 'constants/routes';
import { StyledNavigation } from './StyledNavigation';
import { isUserAdmin } from 'utils/user';
// import useLocalStorage from 'hooks/useLocalStorage';

const Navigation = () => {
  const { user } = useContext(UserContext);
  const { name } = user;

  // const { getItem } = useLocalStorage('user');
  // const { name } = getItem.length && JSON.parse(getItem);

  return (
    <StyledNavigation>
      {/* mobile menu toggler */}
      <button type="button" className="navigation-toggler">
        <div className="circle icon">
          <span className="line top" />
          <span className="line middle" />
          <span className="line bottom" />
        </div>
      </button>

      {/* Admin only action */}
      <ul className="nav-wrapper">
        {isUserAdmin(user) && (
          <li className="nav-link-wrapper">
            <Link className="nav-link" to={routes.CREATE_DEVICE}>
              Create Device
            </Link>
          </li>
        )}

        {/* user name */}
        {name && (
          <li className="nav-link-wrapper">
            <span className="nav-link user-name">{name}</span>
          </li>
        )}

        {/* log in & log out */}
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
