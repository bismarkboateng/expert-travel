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
        const { name, value } = event.target;
        setInputFields(prevFormData => ({...prevFormData, [name]: value}))
    }

    function onFormSubmitHandler(event) {
        event.preventDefault();
        console.log(inputFields);

        // after submission of form
        setInputFields({
            leaving: "",
            going: "",
            dates: "",
            travelers: ""
        })
    }

    

    return (
        <form className={styles.expertForm} onSubmit={onFormSubmitHandler}>
            <div className={styles.inputWrapper}>
                <i>
                    <MdLocationPin className={styles.icon} />
                </i>
                <input
                    placeholder="Leaving from..."
                    name="leaving"
                    id="leaving"
                    onChange={handleFieldChange}
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
                    name="going"
                    id="going"
                    onChange={handleFieldChange}
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
                    type="date"
                    name="dates"
                    id="dates"
                    onChange={handleFieldChange}
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
                    name="travelers"
                    id="travelers"
                    onChange={handleFieldChange}
                    className={styles.expertFlightInput}
                    value={inputFields.travelers}
                />
            </div>

            <button type="submit" className={styles.expertButton}>
                Search
            </button>
        </form>
    )
}