import styles from "./SearchCarsForm.module.css";
import { useState } from "react";


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

    function onFormSubmit() {
        // send data to backend api 
    }
    
    return (
        <form onSubmit={onFormSubmit} className={styles.searchCars}>

            <div className={styles.searchCarsRowone}>
                <input 
                    placeholder="Pick-up"
                    value=""
                    onChange={() => {}}
                    className={styles.searchCarsRowoneInput}
                />

                <input 
                    placeholder="Same as pick-up"
                    value=""
                    onChange={() => {}}
                    className={styles.searchCarsRowoneInput}
                />
            </div>
            
            <div className={styles.searchCarsRowtwo}>
                <input
                    placeholder="Pick-up date"
                    type="date"
                    value=""
                    onChange={() => {}}
                    className={styles.searchCarsRowtwoInput}
                />

                <input 
                    placeholder="Drop of date"
                    type="date"
                    value=""
                    onChange={() => {}}
                    className={styles.searchCarsRowtwoInput}
                />
                <input 
                    placeholder="Pick-up time"
                    type="time"
                    value=""
                    onChange={() => {}}
                    className={styles.searchCarsRowtwoInput}
                />

                <input 
                    placeholder="Drop of time"
                    type="time"
                    value=""
                    onChange={() => {}}
                    className={styles.searchCarsRowtwoInput}
                />

            </div>

            <div>
                <input
                    type={"checkbox"} 
                    value=""
                    onChange={() => {}}
                    className=""
                />
                <span className={styles.checkboxText}>
                Include AARP member rates
                Membership is required and verified at pick-up.
                </span>
            </div>
        </form>
    )
}