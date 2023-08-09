
import styles from "./FlightTopBar.module.css";
import { FlightForm } from "..";

export default function index() {
  return (
    <section className={styles.flightTopBar}>
        <div className={styles.flightItems}>
            <li>Roundtrip</li>
            <li>1 Traveler</li>
            <li>Economy</li>
        </div>

        <div className={styles.flightForm}>
            <FlightForm />
        </div>


    </section>
  )
}
