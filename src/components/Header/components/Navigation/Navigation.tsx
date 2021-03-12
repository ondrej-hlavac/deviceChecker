import React, { useContext } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { Context as UserContext } from 'context/UserContext';
import { routes } from 'constants/routes';
import { StyledNavigation } from './StyledNavigation';
import { isUserAdmin } from 'utils/user';
import { Button } from 'sharedStyledComponents/atoms/Button';
// import useLocalStorage from 'hooks/useLocalStorage';

interface IProps extends RouteComponentProps<any> {}

const Navigation = (props: IProps) => {
  const { user, removeUser } = useContext(UserContext);
  const { name, token } = user;

  // const { getItem } = useLocalStorage('user');
  // const { name } = getItem.length && JSON.parse(getItem);

  const logoutUser = () => {
    removeUser();
    props.history.push(routes.LOG_IN);
  };

  return (
    <StyledNavigation>
      {/* mobile menu toggler */}
      <button type='button' className='navigation-toggler'>
        <div className='circle icon'>
          <span className='line top' />
          <span className='line middle' />
          <span className='line bottom' />
        </div>
      </button>

      {/* Admin only action */}
      <ul className='nav-wrapper'>
        {isUserAdmin(user) && (
          <li className='nav-link-wrapper'>
            <Link className='nav-link' to={routes.CREATE_DEVICE}>
              Create Device
            </Link>
          </li>
        )}

        {/* user name */}
        {token && (
          <li className='nav-link-wrapper'>
            <span className='nav-link user-name'>{name}</span>
          </li>
        )}

        {/* log in & log out */}
        {!token && (
          <li className='nav-link-wrapper'>
            <Link className='nav-link' to={routes.LOG_IN}>
              Login
            </Link>
          </li>
        )}
        {token && (
          <li className='nav-link-wrapper'>
            <Button className='nav-link' onClick={logoutUser}>
              Logout
            </Button>
          </li>
        )}
      </ul>
    </StyledNavigation>
  );
};

export default withRouter(Navigation);
