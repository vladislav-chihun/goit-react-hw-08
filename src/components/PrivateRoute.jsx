import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import ContactsPage from "./ContactsPage/ContactsPage";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({component}) {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return isLoggedIn ? component : <Navigate to="/login" />
}