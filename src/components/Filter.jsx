import css from './Phonebook.module.css'
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from 'redux/filterSlisce';
import {  selectContacts,
  selectFilter,
  selectFilteredContactList,} from '../redux/selectors';


export const Filter = () => {
const filter = useSelector(selectFilter);
const dispath = useDispatch();
const filteredContactsLength = useSelector(selectFilteredContactList).length;
  const contactsLength = useSelector(selectContacts).length;

  const onChange = e => {
    console.log(e.target.value);
    dispath(setFilter(e.target.value));
    
  }
    
 
  
    return(
 <label>
    <span className={css.title}>Find contact by name
    {filteredContactsLength !== contactsLength && (
          <>
            :&nbsp;<b>{filteredContactsLength}</b>
          </>
        )}
        <br />
    </span>
    <input
      type="text"
      value={filter}
      onChange={onChange}
      name="filter"
      placeholder="Enter name"
    />
        </label>
    )
}