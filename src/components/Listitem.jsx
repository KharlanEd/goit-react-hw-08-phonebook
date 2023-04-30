
import css from './Phonebook.module.css'


export function ListItem ( {name, number, onDeleteItem}) {
  
    return (
      <li className={css.item}>
      <span className={css.text}>
      {name}:{number}
      
      </span>
      
    <button
      className={css.btn}          
      onClick={onDeleteItem}
      type="button"
      >
      Delete
      </button>
      </li>)
    
};
