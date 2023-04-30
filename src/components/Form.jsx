import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addContact } from "redux/operations";
import { selectContacts} from "redux/selectors";
import { Field, Form, Formik,ErrorMessage} from 'formik';
import { object, string, number } from 'yup';
import css from './Phonebook.module.css'


export function ContactForm () {
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();

    
  
    const handleSubmit = (values, { resetForm }) => {
    
       
       console.log(values.number);
      const normalizedName = values.name.toLowerCase();
      const filtredContacts = contacts.find(
        contact => contact.name.toLowerCase() === normalizedName
      );
        
      if (filtredContacts) {
        alert(`${values.name} is already in contacts.`);
        return;
      }

    
  
      dispatch(
        addContact({
          name: values.name,
          number: values.number,
        })
      );
  
      resetForm();
    };
  
    const initialValues = { name: '', number: '' };
    
  const userSchema = object({
    name: string().required(),
    number: number().required().positive().integer(),
  });
    
        return (
            
             <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
      >
        <Form
    //  className={css.container}      
            >
                <label className={css.label} >
                    Name
                    <Field
                        name="name"
                        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        />
                  <ErrorMessage className={css.error} component="div" name="name" />      
                </label>
                <label className={css.label} >
                    Number
                    <Field
                        
                        name="number"
                        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"

                      
                    />
                    <ErrorMessage className={css.error} component="div" name="number" />
                </label>
                <button className={css.btn} type="submit">Add contact</button>
        </Form>
        </Formik>
        
   ) }
