import Navigation from "../Navigation/Navigation"
import AuthNav from "../AuthNav/AuthNav"
import { useSelector } from "react-redux"
import {selectIsLoggedIn} from "../../redux/auth/selectors"
import UserMenu from "../UserMenu/UserMenu"
import css from "./AppBar.module.css"
export default function AppBar() {
    const isLogedIn = useSelector(selectIsLoggedIn)
    return <div className={css.appBar}>
        <Navigation />
            {isLogedIn ? <UserMenu /> : <AuthNav/>}  
    </div>
}