import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations"
import css from "./UserMenu.module.css"

export default function UserMenu() {
    const dispatch = useDispatch();
  return (
    <div >
      <button type="button" className={css.logoutBtn} onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
}