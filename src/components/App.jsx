import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Container from './Container/Container';

const App = () => {
  return (
    <Container>
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;
