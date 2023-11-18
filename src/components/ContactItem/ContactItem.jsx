import React from 'react';
import {DeleteBtn, ListItem} from '../App/App.styled'



const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <ListItem key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteBtn onClick={() => deleteContact(contact.id)}>Delete</DeleteBtn>
        </ListItem>
      ))}
    </ul>
  );
};

export default ContactList;