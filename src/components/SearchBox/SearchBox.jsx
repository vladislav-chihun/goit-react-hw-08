import { useDispatch } from "react-redux";
import { updateFilter } from "../../redux/filters/slice";
import css from "./SearchBox.module.css"

export default function SearchBox() {
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(updateFilter(event.currentTarget.value));
    };
    
    return (
        <div className={css.searchBox}>
            <p className={css.searchLabel}>Find contacts by name</p>
            <input type="text" onChange={handleChange} className={css.searchInput} />
        </div>
    );
}