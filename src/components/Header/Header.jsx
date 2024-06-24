import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div><Link to="/">Home</Link>
            <Link to="/tasks">Tasks</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Log in</Link>
        
        </div>
    )
}