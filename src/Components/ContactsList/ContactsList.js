import { ContactsListItem } from 'Components/ContactsListItem/ContactsListItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List } from './ContactsList.styled';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';
import { fetchContacts, deleteContact } from '../../redux/contacts/contacts-operations';

export const ContactsList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const removeContact = id => dispatch(deleteContact(id));

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactsListItem
          key={id}
          id={id}
          name={name}
          number={number}
          remove={() => removeContact(id)}
        />
      ))}
    </List>
  );
};
