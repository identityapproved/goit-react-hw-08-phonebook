import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import AuthNav from './AuthNav';
import { Navigation } from './Navigation';
import { useSelector } from 'react-redux';

export default function Header() {
  const isLogged = useSelector(getIsLoggedIn);

  return (
    <header>
      <Navigation />
      {isLogged ? 'll' : <AuthNav />}
    </header>
  );
}
