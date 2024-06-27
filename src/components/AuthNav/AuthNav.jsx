import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css"

export default function AuthNav() {
    return (
      <div >
          <ul className={css.navigationList}>
              <li>
                <NavLink  to="/register" className={css.link}>
                    Register
                </NavLink>
              </li>
              <li>
                <NavLink  to="/login" className={css.link}>
                    Log In
                </NavLink>
              </li>
          </ul>
    </div>
  );
}
