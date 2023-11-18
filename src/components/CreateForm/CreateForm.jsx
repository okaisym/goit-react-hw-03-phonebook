import React, { useState } from 'react';
import { Label, AddContactBtn, Input } from '../App/App.styled';


const ContactForm = ({ addContact }) => {
  const [values, setValues] = useState({ name: '', number: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(values);
    setValues({ name: '', number: '' });
  };

  const { name, number } = values;

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor="nameInput">Name:</Label>
      <Input
        type="text"
        id="nameInput"
        name="name"
        value={name}
        onChange={handleInputChange}
        required
      />
      <Label htmlFor="numberInput">Number:</Label>
      <Input
        type="text"
        id="numberInput"
        name="number"
        value={number}
        onChange={handleInputChange}
        required
      />
      <AddContactBtn type="submit">
        Add contact
      </AddContactBtn>
    </form>
  );
};

export default ContactForm;