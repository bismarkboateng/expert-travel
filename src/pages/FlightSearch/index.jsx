
import styles from "./FlightSearch.module.css";
import { FlightTopBar, SaveSearch, FlexibleDates } from "../../components";


export default function index() {
  return (
    <section className={styles.flightSearch}>
        <FlightTopBar />
        <div className={styles.favDates}>
          <SaveSearch />
          <FlexibleDates />
        </div>

    </section>
  )
}
