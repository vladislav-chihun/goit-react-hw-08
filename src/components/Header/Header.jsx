import { Link } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";

export default function Header() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const dispatch = useDispatch()


    return (
        <div>
            <Link to="/">Home</Link>
            {isLoggedIn && <Link to="/tasks">Tasks</Link>}
            {!isLoggedIn && <Link to="/register">Register</Link>}
            {!isLoggedIn && <Link to="/login">Log in</Link>}
            {isLoggedIn && <button type="button" onClick={()=>dispatch(logOut())}>Log out</button>}
        </div>
    );
}
