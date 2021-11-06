import { Container } from 'Components/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { getUserName } from 'redux/auth/auth-selectors';

export default function UserMenu() {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  return (
    <Container>
      <span> Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </Container>
  );
}
