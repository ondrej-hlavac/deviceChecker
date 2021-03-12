import React, { useContext } from 'react';
import { routes } from 'constants/routes';
import { Context as UserContext } from 'context/UserContext';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { isUserAdmin } from 'utils/user';

interface IProps extends RouteProps {
  onlyAdmin?: boolean;
}

const ProtectedRoute = ({ children, onlyAdmin = false }: IProps) => {
  const { user } = useContext(UserContext);

  let isAuthorized = !!user.token;
  let isAdmin = isUserAdmin(user);

  return (
    <Route
      render={({ location }) =>
        isAuthorized && (onlyAdmin ? isAdmin : true) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: routes.LOG_IN,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
