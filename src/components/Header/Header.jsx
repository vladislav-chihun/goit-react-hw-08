import { Link } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

export default function Header() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <div>
            <Link to="/">Home</Link>
            {isLoggedIn && <Link to="/tasks">Tasks</Link>}
            {!isLoggedIn && <Link to="/register">Register</Link>}
            {!isLoggedIn && <Link to="/login">Log in</Link>}
        </div>
    );
}
