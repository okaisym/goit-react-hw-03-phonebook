import React, { Component } from 'react';
import ContactForm from '../CreateForm/CreateForm';
import ContactList from '../ContactItem/ContactItem';
import Filter from '../Filter/Filter';
import { Title, Container } from './App.styled';

const storageKey = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleInputChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  addContact = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  componentDidMount() {
    const savedContacts = window.localStorage.getItem(storageKey);
    if (savedContacts !== null) {
      this.setState({contacts: JSON.parse(savedContacts)})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.contacts !== this.state.contacts) {
      window.localStorage.setItem(storageKey, JSON.stringify(this.state.contacts))
    }
  }

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm addContact={this.addContact} />
        <Title>Contacts</Title>
        <Filter value={filter} onChange={this.handleInputChange} />
        <ContactList
          contacts={filteredContacts} 
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;