import styles from "./FlightSearch.module.css";
import { Choice } from "./constants";


export default function index() {
    return (
        <section className={styles.flightSearch}>
            <div className={styles.flightText}>Search flights</div>

            <ul className={styles.flightsUnordered}>
                { Choice.map((item) => (
                    <li className={styles.flightsList} key={item.name}> { item.name }</li>
                ))}
                    <select
                        className={styles.selectChoice}
                        onChange={(event) => setTravelChoice(event.target.value)}
                        value={travelChoice}
                    >
                        {["Economy", "First Class", "Premium Economy", "Business Class"].map((item, index) => (
                            <option
                                key={`${item}-${index}`} className={styles.fieldChoice}
                            > 
                                { item }
                            </option>
                        )) }
                    </select>

            </ul>
            <div className={styles.flights} />
        </section>
    )
}