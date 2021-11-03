import Header from 'Components/Header/Header';
import PrivateRoute from 'Components/Routes/PrivateRoute';
import PublicRoute from 'Components/Routes/PublicRoute';
import { lazy, Suspense } from 'react';
import { Switch } from 'react-router';
import { ContactsView } from 'Views/ContactsView';
import { HomeView } from 'Views/HomeView';
import { LoginView } from 'Views/LoginView';
import { RegistrationView } from 'Views/RegisterView';

// const ContactsView = lazy(() => import('../../Views/ContactsView'));
// const HomeView = lazy(() => import('../../Views/HomeView'));
// const RegistrationView = lazy(() => import('../../Views/RegisterView'));

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Suspense fallback={'loading...'}>
          {/* <PublicRoute path="/" exact>
          <HomeView />
        </PublicRoute> */}

          <PublicRoute path="/registration" exact>
            <RegistrationView />
          </PublicRoute>

          <PublicRoute path="/login" exact>
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
