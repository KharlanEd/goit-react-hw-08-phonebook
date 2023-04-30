import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { selectContacts } from "redux/selectors";
import { ContactForm } from "components/Form";
import { ContactList } from "components/ContactList";
import { Filter } from "components/Filter";
import css from '../../components/Phonebook.module.css'






export default function Contacts() {
    const dispatch = useDispatch();
  
    const contacts = useSelector(selectContacts);
  
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
  
    return (
      <div className={css.container} >
        <ContactForm />
        <h3 >Contacts: {contacts.length}</h3>
        <Filter />
        <ContactList />
      </div>
    );
  }