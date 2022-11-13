import ContactsList from 'components/ContactsList/ContactsList';
import FormBook from 'components/FormBook/FormBook';
import FilterContacts from '../FilterContacts/FilterContacts';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import useLocalStorage from 'Hooks/useLocalStorage';
// імпорт стилів
import { AppContainer, H2 } from './App.styled';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('name', []);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contact`);
      return;
    }
    setContacts(contacts => [newContact, ...contacts]);
  };

  // Метод видалення контакту по ID //Працюємо лишe з map(), reduce(), filter()
  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };
  // фільтр контактів
  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getFindContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      <AppContainer>
        <H2>Contacts</H2>
        <FormBook onSubmit={addContact} />
        <H2>Contacts list</H2>
        <FilterContacts filter={filter} changeFilter={changeFilter} />
        <ContactsList
          contacts={getFindContacts()}
          onDeleteContact={deleteContact}
        />
      </AppContainer>
    </>
  );
}
