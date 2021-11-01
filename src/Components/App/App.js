import ContactsForm from 'Components/ContactsForm/ContactsForm';
import { ContactsList } from 'Components/ContactsList/ContactsList';
import { Container } from 'Components/Container/Container';
import { Filter } from 'Components/Filter/Filter';

export const App = () => {
  return (
    <>
      <Container title="Phonebook">
        <ContactsForm />
      </Container>

      <Container title="Contacts">
        <Filter />
        <ContactsList />
      </Container>
    </>
  );
};
