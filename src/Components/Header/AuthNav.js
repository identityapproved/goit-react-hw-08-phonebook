import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <>
      <NavLink to="/registration" exact>
        Sign Up
      </NavLink>

      <NavLink to="/login" exact>
        Log In
      </NavLink>
    </>
  );
}
