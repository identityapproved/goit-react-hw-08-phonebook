import Header from 'Components/Header/Header';
import PrivateRoute from 'Components/Routes/PrivateRoute';
import PublicRoute from 'Components/Routes/PublicRoute';
import { lazy, Suspense, useEffect } from 'react';
import { Switch } from 'react-router';
import { ContactsView } from 'Views/ContactsView';
import { HomeView } from 'Views/HomeView';
import { LoginView } from 'Views/LoginView';
import { RegistrationView } from 'Views/RegisterView';
import { useDispatch, useSelector } from 'react-redux';
import { getIsCurrent } from 'redux/auth/auth-selectors';
import { fetchCurrentUser } from 'redux/auth/auth-operations';

// const ContactsView = lazy(() => import('../../Views/ContactsView'));
// const HomeView = lazy(() => import('../../Views/HomeView'));
// const RegistrationView = lazy(() => import('../../Views/RegisterView'));

function App() {
  const dispatch = useDispatch();
  // const isCurrent = useSelector(getIsCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />

      <Switch>
        <Suspense fallback={'loading...'}>
          {/* <PublicRoute path="/" exact>
          <HomeView />
        </PublicRoute> */}

          <PublicRoute path="/registration" restricted>
            <RegistrationView />
          </PublicRoute>

          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Suspense>
      </Switch>
    </>
  );
}

export default App;
