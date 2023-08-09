import { RiArrowDropDownLine } from "react-icons/ri";
import styles from "./FlexibleDates.module.css";


export default function index() {
  return (
    <section className={styles.flexDates}>
        <div>
            <h4>Flexible dates</h4>
            <div>Compare prices for nearby days</div>
        </div>
        <div className={styles.arrow}>
            <RiArrowDropDownLine />
        </div>

    </section>
  )
}
