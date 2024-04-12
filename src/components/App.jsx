import React, { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Container from './Container/Container';
import { getFilter, getContacts } from '../redux/selectors';
import { useSelector } from 'react-redux';

const App = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const getFilteredContacts = () => {
    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(filter.filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Container>
      <ContactForm />
      <Filter />
      <ContactList filteredContacts={filteredContacts} />
    </Container>
  );
};

export default App;
