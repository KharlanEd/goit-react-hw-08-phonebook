import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { logOut } from 'redux/auth/operestions';
import css from '../UserMenu/UserMenu.module.css'


export const UserMenu=()=>{
    const dispatch = useDispatch();
    const { user } = useAuth();

    return(
        <div  className={css.wrapper}>
             <p className={css.username}>Welcome, {user.name}</p>
             <button type='button' onClick={() => dispatch(logOut())}>Logout</button>
        </div>
    )
}