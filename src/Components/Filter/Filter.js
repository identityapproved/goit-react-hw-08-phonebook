import { Input, Label } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { changeFilter } from 'redux/contacts/contacts-slice';

export const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Label>
      Filter:
      <Input type="text" value={value} onChange={e => dispatch(changeFilter(e.target.value))} />
    </Label>
  );
};
