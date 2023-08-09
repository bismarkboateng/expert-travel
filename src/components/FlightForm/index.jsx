import styles from "./FlightForm.module.css";
import { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function index() {
    const[flightInputFields, setFlightInputFields] = useState({
        leaving: "",
        going: "",
        dates: "",
        travelers: ""
    })

    const navigate = useNavigate();

    function handleFlightFieldChange(event) {
        const { name, value } = event.target;

        setFlightInputFields(prevFlightForm => ({ ...prevFlightForm, [name]: value}))
    }

    function onFlightFormSubmit(event) {
        event.preventDefault();

        console.log(flightInputFields)

        setFlightInputFields({
            leaving: "",
            going: "",
            dates: "",
            travelers: ""
        })

        // Note: check if user entered sth, else disable the button

        // after fetching data from a backend api, navigate to the flight search page
        navigate("/flight-search")
    }
    

    return (
        <form className={styles.expertFlightForm} onSubmit={onFlightFormSubmit}>

            <div className={styles.inputWrapper}>
                <i>
                    <MdLocationPin className={styles.icon} />
                </i>
                <input
                    placeholder="Leaving from..."
                    name="leaving"
                    id="leaving"
                    onChange={handleFlightFieldChange}
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
                    name="going"
                    id="going"
                    onChange={handleFlightFieldChange}
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
                    type="date"
                    name="dates"
                    id="dates"
                    onChange={handleFlightFieldChange}
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
                    name="travelers"
                    id="travelers"
                    onChange={handleFlightFieldChange}
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