import styles from "./Search.module.css";
import { Form } from "..";
import { useState } from "react";


export default function index() {
    const [travelChoice, setTravelChoice] = useState("")


    console.log(travelChoice)

    return (
        <section className={styles.expertSearch}>
            <ul className={styles.expertUnordered}>
                {["Stays", "Flights", "Cars", "Packages", "Things to do", "Cruises"].map((item, index) => (
                    <li  className={styles.listItem} key={`${item} - ${index}`}>{ item }</li>
                ))}
            </ul>

            <section>
                <ul className={styles.expertSelect}>
                    {["Roundtrip", "One-way", "Multi-city"].map((item, index) => (
                        <li  className={styles.listItem} key={`${item} - ${index}`}>{ item }</li>
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
                  <Form />  
            </section>
        </section>
    )
}