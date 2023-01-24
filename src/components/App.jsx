import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import PhoneList from './PhoneList/PhoneList';
import '../styles/shared.scss';

const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export class App extends Component {
  state = {
    contacts: contacts,
    name: '',
    filter: '',
  };

  handleAddContact = ({ name, number }) => {
    if (this.state.contacts.find(contact => name === contact.name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const id = nanoid();
    this.setState(prevState => {
      const { contacts } = prevState;
      const newContacts = [...contacts, { id, name, number }];
      return { ...prevState, contacts: newContacts };
    });
  };

  handleOnChangeFilter = evt => {
    const { value } = evt.currentTarget;
    this.setState(prevState => {
      return {
        ...prevState,
        filter: value,
      };
    });
  };

  calcVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLocaleLowerCase();

    const visibleContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter)
    );
    return visibleContacts;
  };

  onDeleteContact = id => {
    this.setState(prevState => {
      const { contacts } = prevState;

      const newContacts = contacts.filter(contact => contact.id !== id);

      return { ...prevState, contacts: newContacts };
    });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.calcVisibleContacts();
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleOnChangeFilter} />
        <PhoneList contacts={visibleContacts} onDelete={this.onDeleteContact} />
      </div>
    );
  }
}