import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { Form, FormBtn, Input, Label } from './ContactsForm.styled';
import { addContact } from 'redux/contacts/contacts-operations';

export default function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onHandleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const onHandleSubmit = e => {
    e.preventDefault();

    const contactCheck = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (contactCheck) {
      reset();
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={onHandleSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          onChange={onHandleChange}
          value={name}
          required
        />
      </Label>
      <Label>
        Phone:
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер должен состоять цифр, и может содержать пробелы, тире, круглые скобки и может начинаться с +."
          onChange={onHandleChange}
          value={number}
          required
        />
      </Label>
      <FormBtn type="submit" disabled={!name || !number}>
        Add
      </FormBtn>
    </Form>
  );
}
