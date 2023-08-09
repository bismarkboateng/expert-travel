import { BsSuitHeart } from "react-icons/bs";
import styles from "./SaveSearch.module.css";



export default function index() {
  return (
    <section className={styles.saveSearch}>
        <div className={styles.text}>Save this search to a trip</div>
        <div className={styles.searchWrapper}>
            <BsSuitHeart className={styles.searchIcon} />
            <span>Save search</span>
        </div>
    </section>
  )
}
