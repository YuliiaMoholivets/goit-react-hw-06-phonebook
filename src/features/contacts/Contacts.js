import { CreateContact } from "./CreateContact";
import { ContactsFilter } from './ContactsFilter';
import { ContactsList } from './ContactsList';
import { useSelector } from "react-redux";
import styles from "./Contacts.module.css";
import {contacts} from 'redux/selector';

export const ContactPage = () => {
  const contactsAdd= useSelector(contacts);
  return (
    <>
      <CreateContact />
      <>
        {contactsAdd.lengh > 0 && (
          <h1 className={styles.title}>You have {contactsAdd.lengh} contacts in you phone-book</h1>
        )}
      </>
      <ContactsFilter />
      <ContactsList />
    </>
  );
};