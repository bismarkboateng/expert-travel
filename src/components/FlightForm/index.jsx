import styles from "./FlightForm.module.css";
import { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";


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

            <div className={styles.inputWrapper}>
                <i>
                    <MdLocationPin className={styles.icon} />
                </i>
                <input
                    placeholder="Leaving from..."
                    onChange={() => handleFlightFieldChange}
                    className={styles.expertFlightInput}
                    value={flightInputFields.leaving}
                />
            </div>

            <div className={styles.inputWrapper}>
                <i>
                    <MdLocationPin className={styles.icon} />
                </i>
                <input
                    placeholder="Going to..."
                    onChange={() => handleFlightFieldChange}
                    className={styles.expertFlightInput}
                    value={flightInputFields.going}
                />
            </div>

            <div className={styles.inputWrapper}>
                <i>
                    <MdDateRange className={styles.icon} />
                </i>
                <input
                    placeholder="Date.."
                    onChange={() => handleFlightFieldChange}
                    className={styles.expertFlightInput}
                    value={flightInputFields.dates}
                />
            </div>

            <div className={styles.inputWrapper}>
                <i>
                    <FaUserAlt className={styles.iconUser} />
                </i>
                <input
                    placeholder="Travelers"
                    onChange={() => handleFlightFieldChange}
                    className={styles.expertFlightInput}
                    value={flightInputFields.travelers}
                />
            </div>
            <button className={styles.expertFlightButton}>
                Search
            </button>
        </form>
    )
}