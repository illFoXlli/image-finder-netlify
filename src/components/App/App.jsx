import { Component } from 'react';
import ContactForm from '../ContactForm';
import ContactsList from '../ContactsList';
import Filter from '../Filter';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { Wrapper } from './App.styled';
import contacts from 'components/data/contacts';

export class App extends Component {
  state = {
    contacts: [...contacts],
    name: '',
    number: '',
    filter: '',
  };
  componentDidMount() {
    if (JSON.parse(localStorage.getItem('fox'))) {
      this.setState({ contacts: JSON.parse(localStorage.getItem('fox')) });
    }
  }
  // addLocalStorage = (prevState) => {
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    if (this.state.contacts !== prevState.contacts) {
      console.log('Что то обновилось типа контакт');
      localStorage.setItem('fox', JSON.stringify(this.state.contacts));
    }
  }
  // }
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
      <Wrapper>
        <h2>Phonebook</h2>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter setFilter={this.setFilter} />
        <ContactsList
          toShow={this.toShow}
          onDeleteContact={this.onDeleteContact}
          error={this.error}
        />
      </Wrapper>
    );
  }
}
