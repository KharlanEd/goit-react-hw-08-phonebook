import { useSelector } from "react-redux";
import { selectContacts } from "redux/selectors";
import { ListItem } from "./Listitem";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/operations"; 
import { selectFilter } from "redux/selectors";

const getVisibleContacts = (contacts, filter) => {
  if (!filter) {
    return contacts;
  } else {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
};
// .includes(filter.toLowerCase()

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  // const filter = useSelector(getFilter);
 
  const filter = useSelector(selectFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  const onDeleteContact = id => dispatch(deleteContact(id))
  
  // const filtredContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const visibleContacts = filtredContacts()
  // const visibleContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase())
 
  
    return (
      <ul >
        {visibleContacts.map((contact, ) => (
          <ListItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteItem={() => onDeleteContact(contact.id)}
          />
        ))}
      </ul>
    )
  };

     

