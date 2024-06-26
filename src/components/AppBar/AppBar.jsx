import Navigation from "../Navigation/Navigation"
import AuthNav from "../AuthNav/AuthNav"
import { useSelector } from "react-redux"
import {selectIsLoggedIn} from "../../redux/auth/selectors"
import UserMenu from "../UserMenu/UserMenu"
export default function AppBar() {
    const isLogedIn = useSelector(selectIsLoggedIn)
    return <div>
        <Navigation />
            {isLogedIn ? <UserMenu /> : <AuthNav/>}  
    </div>
}