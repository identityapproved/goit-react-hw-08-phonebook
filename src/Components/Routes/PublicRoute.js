import { Redirect, Route } from 'react-router';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/contacts',
  ...routeProps
}) {
  const isLogged = useSelector(getIsLoggedIn);
  const doRedirect = isLogged && restricted;

  return <Route {...routeProps}>{doRedirect ? <Redirect to={redirectTo} /> : children}</Route>;
}
