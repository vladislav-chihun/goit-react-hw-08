import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css"

export default function NotFoundPage() {
    return <div className={css.notFoundContainer}>Page not found
        <Link to="/" className={css.notFoundPageHpmeBtn}>
            Home page
        </Link>
    </div>
}