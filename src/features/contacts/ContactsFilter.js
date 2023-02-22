import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "./redux/contacts.slice";
import styles from './ContactsFilter.module.css';
import {filter} from 'redux/selector';

export const ContactsFilter = () => {
  const dispatch = useDispatch();
  const filterAdd = useSelector(filter);

  // const onQueryChenged = () => {
  //   dispatch(setFilter(filterAdd ));

  // };


  return (
    <>
      <h4 className={styles.label}>Find your contact</h4>
      <input  className={styles.input}
        placeholder="Enter contact name"
        onChange={(e) => dispatch(setFilter(e.target.value)) }
        value={filterAdd}
      />
    </>
  );
};

