import { useState } from "react";
import styles from "./FlightSearch.module.css";
import { Choice } from "./constants";
import { FlightForm } from "..";


export default function index() {
    const [travelChoice, setTravelChoice] = useState("");

    console.log(travelChoice)

    return (
        <section className={styles.flightSearch}>
            <div className={styles.flightText}>Search flights</div>

            <div className={styles.choiceSelectFields}>
                <ul className={styles.flightsUnordered}>
                    { Choice.map((item) => (
                        <li className={styles.flightsList} key={item.name}> { item.name }</li>
                    ))}
                </ul>

                <select
                    className={styles.selectChoice}
                    onChange={(event) => setTravelChoice(event.target.value)}
                    value={travelChoice}
                >
                    {["Economy", "First Class", "Premium Economy", "Business Class"].map((item, index) => (
                        <option
                            key={`${item}-${index}`} className={styles.fieldChoice}
                        > 
                            <li className={styles.fieldItem}>{ item }</li>
                        </option>
                    )) }
                </select>
            </div>
            <div className={styles.flights} />
            <FlightForm />
        </section>
    )
}