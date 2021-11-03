import { Redirect, Route } from 'react-router';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export default function PrivateRoute({ children, redirectTo = '/', ...routeProps }) {
  const isLogged = useSelector(getIsLoggedIn);
  return <Route {...routeProps}>{isLogged ? children : <Redirect to={redirectTo} />}</Route>;
}
