import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css"

export default function Navigation() {
    const isLogedIn = useSelector(selectIsLoggedIn);
    return <div className={css.navigation}>
        <NavLink  to="/" className={css.navLink}>Home</NavLink>
            {isLogedIn && (<NavLink to="/contacts" className={css.navLink}>Contacts</NavLink>)}   
    </div>
}