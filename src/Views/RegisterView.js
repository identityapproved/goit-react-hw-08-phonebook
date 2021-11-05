import { Form, Label, Input, FormBtn } from 'Components/ContactsForm/ContactsForm.styled';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/auth-operations';

export const RegistrationView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onHandleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const onHandleSubmit = e => {
    e.preventDefault();

    dispatch(registration({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={onHandleSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          onChange={onHandleChange}
          value={name}
          required
        />
      </Label>

      <Label>
        Email:
        <Input
          type="email"
          name="email"
          pattern="[a-zA-Z0-9!#$%&amp;'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
          title="Email format: xxx@xxx.xxx"
          onChange={onHandleChange}
          value={email}
          required
        />
      </Label>

      <Label>
        Password:
        <Input
          type="password"
          name="password"
          title="Password must be 8 characters including 1 uppercase letter, 1 lowercase letter and numeric characters"
          // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          value={password}
          onChange={onHandleChange}
          required
        />
      </Label>
      <FormBtn type="submit" disabled={!name || !email || !password}>
        Sign Up
      </FormBtn>
    </Form>
  );
};
