import { Component } from 'react';
import ContactForm from './ContactForm';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-0', name: 'fffff', number: '66666' },
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  lowerCaseValue(value) {
    return value.toLowerCase();
  }
  error = totel => Notiflix.Notify.failure(totel);
  addContact = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    let marker = this.state.contacts.some(
      item => item.name.toLowerCase() === this.lowerCaseValue(name)
    );

    if (marker) {
      return this.error(` ${name}is already in contacts`);
    } else {
      contact.name = name;
      contact.number = number;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  toShow = () => {
    let contacts = this.state.contacts;
    let filterSate = this.state.filter;
    if (filterSate === '') {
      return contacts;
    } else {
      return contacts.filter(item =>
        this.lowerCaseValue(item.name).includes(this.lowerCaseValue(filterSate))
      );
    }
  };

  setFilter = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  onDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter setFilter={this.setFilter} />
        <ContactsList
          toShow={this.toShow}
          onDeleteContact={this.onDeleteContact}
          error={this.error}
        />
      </div>
    );
  }
}
