import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import AuthNav from './AuthNav';
import { Navigation } from './Navigation';
import { useSelector } from 'react-redux';
import UserMenu from './UserMenu';

export default function AppBar() {
  const isLogged = useSelector(getIsLoggedIn);

  return (
    <header>
      <Navigation />
      {isLogged ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
