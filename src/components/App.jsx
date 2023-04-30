import {useEffect} from "react";
// import { ContactList } from "./ContactList";
// import { Filter } from "./Filter";
// import { ContactForm } from "./Form";
// import css from './Phonebook.module.css'
import { useDispatch} from "react-redux";
import { fetchContacts } from "redux/operations";
// import { getIsLoading,getError } from "redux/selectors";
import { Route,Routes } from "react-router-dom";
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { lazy } from "react";
import { useAuth } from "hooks/useAuth";
import { refreshUser } from "redux/auth/operestions";

const HomePage = lazy(() => import('../redux/Pages/Home'));
const RegisterPage = lazy(() => import('../redux/Pages/Register'));
const LoginPage = lazy(() => import('../redux/Pages/Login'));
const ContactsPage = lazy(() => import('../redux/Pages/Contacts'));



export const App=()=> {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>
      <b>Refreshing user...</b>
    </div>
  ) : (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />

      <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
     
    </Routes>
  );







  //   <div
  //     style={{
  //       height: '100vh',
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       fontSize: 40,
  //       color: '#010101'
  //     }}
  //   >
  //     <div>
  //     <h1 className={css.title}>Phonebook</h1>
  //       <ContactForm />
      
  //       <h2 className={css.title}>Contacts</h2>
  //       <Filter />
  //       {isLoading && !error && <b>Request in progress...</b>}
  //       <ContactList/>
        
        
  //     </div>  
  //   </div>
  // )
}
