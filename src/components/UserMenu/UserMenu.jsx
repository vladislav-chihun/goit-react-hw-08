import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import {logOut} from "../../redux/auth/operations"

export default function UserMenu() {
    const dispatch = useDispatch();
    return (
      <div >
      <p >Welcome</p>
      <button type="button" onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
}