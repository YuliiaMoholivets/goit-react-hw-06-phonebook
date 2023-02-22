import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "./redux/contacts.slice";
import styles from './ContactsFilter.module.css';
import {filter} from 'redux/selector';

export const ContactsFilter = () => {
  const dispatch = useDispatch();
  const filterSearch = useSelector(filter);

  const onQueryChenged = (filterSearch) => {
    dispatch(setFilter(filterSearch));

  };


  return (
    <>
      <h4 className={styles.label}>Find your contact</h4>
      <input  className={styles.input}
        placeholder="Enter contact name"
        onChange={(e) => onQueryChenged(e.target.value)}
        value={filter}
      />
    </>
  );
};

