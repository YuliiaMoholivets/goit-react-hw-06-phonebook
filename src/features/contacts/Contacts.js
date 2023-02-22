import { CreateContact } from "./CreateContact";
import { ContactsFilter } from './ContactsFilter';
import { ContactsList } from './ContactsList';
import { useSelector } from "react-redux";
// import styles from "./Contacts.module.css";
import { contactsSelect} from 'redux/selector';

export const ContactPage = () => {
  const contactsAdd= useSelector(contactsSelect);
  return (
    <>
      <CreateContact />
      {contactsAdd.length === 0 ? (
        <p>There is no contacts</p>
      ) : (
        <>
          <ContactsFilter />
          <ContactsList />
        </>
      )}
      
    </>
  );
};

