import ContactsList from 'components/ContactsList/ContactsList';
import FormBook from 'components/FormBook/FormBook';
import FilterContacts from '../FilterContacts/FilterContacts';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// імпорт стилів
import { AppContainer, H2 } from './App.styled';
class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  // добавдяємо контакт та номер телефону по сабміту та появляння помилки,якщо ім'я та номер вже є в контакті
  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const findContact = this.state.contacts.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

    findContact
      ? alert(`${name} is already in contact`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };
  // Метод видалення контакту по ID //Працюємо лишe з map(), reduce(), filter()
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  // фільтр контактів
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  getFindContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // добавлення контактів в локал сторедж
  componentDidUpdate(prevProps, prevState) {
    // перевірка поля на не рівність
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  // сейтить ізначальний state данних
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if(parsedContacts){
      this.setState({contacts: parsedContacts});
    }
  }

  render() {
    const findContacts = this.getFindContacts();
    return (
      <>
        <AppContainer>
          <H2>Contacts</H2>
          <FormBook onSubmit={this.addContact} />
          <H2>Contacts list</H2>
          <FilterContacts
            filter={this.state.filter}
            changeFilter={this.changeFilter}
          />
          <ContactsList
            contacts={findContacts}
            onDeleteContact={this.deleteContact}
          />
        </AppContainer>
      </>
    );
  }
}
export default App;
