import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Container from './Container/Container';
import { getFilter, getContacts } from '../redux/selectors';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

const App = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const filteredContacts = useMemo(
    () =>
      contacts?.filter(contact =>
        contact.name
          .toLowerCase()
          .includes(filter.filter.toLowerCase(filter.filter.toLowerCase()))
      ),
    [contacts, filter]
  );

  return (
    <Container>
      <ContactForm />
      <Filter />
      <ContactList filteredContacts={filteredContacts} />
    </Container>
  );
};

export default App;
