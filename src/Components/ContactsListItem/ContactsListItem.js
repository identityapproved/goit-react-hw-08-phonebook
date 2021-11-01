import { DeleteBtn, Item, ListItem } from './ContactsListItem.styled';
import PropTypes from 'prop-types';

export const ContactsListItem = ({ name, number, remove }) => {
  return (
    <ListItem>
      <Item>{name}</Item>
      <Item>{number}</Item>
      <DeleteBtn type="button" onClick={remove}>
        remove
      </DeleteBtn>
    </ListItem>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};
