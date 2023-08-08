import styles from "./Form.module.css";
import { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";


export default function index() {
    const[inputFields, setInputFields] = useState({
        leaving: "",
        going: "",
        dates: "",
        travelers: ""
    })

    function handleFieldChange(event) {
        // handle input change
    }
    
    return (
        <form className={styles.expertForm}>
            <div className={styles.inputWrapper}>
                <i>
                    <MdLocationPin className={styles.icon} />
                </i>
                <input
                    placeholder="Leaving from..."
                    onChange={() => handleFieldChange}
                    className={styles.expertFlightInput}
                    value={inputFields.leaving}
                />
            </div>

            <div className={styles.inputWrapper}>
                <i>
                    <MdLocationPin className={styles.icon} />
                </i>
                <input
                    placeholder="Going to..."
                    onChange={() => handleFieldChange}
                    className={styles.expertFlightInput}
                    value={inputFields.going}
                />
            </div>

            <div className={styles.inputWrapper}>
                <i>
                    <MdDateRange className={styles.icon} />
                </i>
                <input
                    placeholder="Date.."
                    onChange={() => handleFieldChange}
                    className={styles.expertFlightInput}
                    value={inputFields.dates}
                />
            </div>

            <div className={styles.inputWrapper}>
                <i>
                    <FaUserAlt className={styles.iconUser} />
                </i>
                <input
                    placeholder="Travelers"
                    onChange={() => handleFieldChange}
                    className={styles.expertFlightInput}
                    value={inputFields.travelers}
                />
            </div>

            <button className={styles.expertButton}>
                Search
            </button>
        </form>
    )
}