import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
    const isLogedIn = useSelector(selectIsLoggedIn);
    return <div>
        <NavLink  to="/">Home</NavLink>
            {isLogedIn && (<NavLink to="/contacts">Contacts</NavLink>)}   
    </div>
}