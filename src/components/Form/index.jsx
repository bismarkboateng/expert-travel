import styles from "./Form.module.css";
import { useState } from "react";
// import { MdLocationOn } from "react-icons/md";


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

            <input
                placeholder="Leaving from..."
                onChange={() => handleFieldChange}
                className={styles.expertInput}
                value={inputFields.leaving}
            />

            <input
                placeholder="Going to..."
                onChange={() => handleFieldChange}
                className={styles.expertInput}
                value={inputFields.going}
            />

            <input
                placeholder="Dates"
                onChange={() => handleFieldChange}
                className={styles.expertInput}
                value={inputFields.dates}
            />
            
            <input
                placeholder="Travelers"
                onChange={() => handleFieldChange}
                className={styles.expertInput}
                value={inputFields.travelers}
            />

            <button className={styles.expertButton}>
                Search
            </button>
        </form>
    )
}