import styles from "./FlightForm.module.css";
import { useState } from "react";
// import { MdLocationOn } from "react-icons/md";


export default function index() {
    const[flightInputFields, setflightInputFields] = useState({
        leaving: "",
        going: "",
        dates: "",
        travelers: ""
    })

    function handleFlightFieldChange(event) {
        event.preventDefault();
        // handle input change
    }

    function onFlightFormSubmit(event) {
        event.preventDefault();
    }
    
    return (
        <form className={styles.expertFlightForm} onSubmit={onFlightFormSubmit}>

            <input
                placeholder="Leaving from..."
                onChange={() => handleFlightFieldChange}
                className={styles.expertFlightInput}
                value={flightInputFields.leaving}
            />

            <input
                placeholder="Going to..."
                onChange={() => handleFlightFieldChange}
                className={styles.expertFlightInput}
                value={flightInputFields.going}
            />

            <input
                placeholder="Dates"
                onChange={() => handleFlightFieldChange}
                className={styles.expertFlightInput}
                value={flightInputFields.dates}
            />
            
            <input
                placeholder="Travelers"
                onChange={() => handleFlightFieldChange}
                className={styles.expertFlightInput}
                value={flightInputFields.travelers}
            />

            <button className={styles.expertFlightButton}>
                Search
            </button>
        </form>
    )
}