import styles from "./SearchCarsForm.module.css";
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

    function onFormSubmit() {
        // send data to backend api 
    }
    
    return (
        <form onSubmit={onFormSubmit} className={styles.searchCars}>

            <div className={styles.searchCarsRowone}>

                <div className={styles.inputWrapper}>
                    <i>
                        <MdLocationPin className={styles.icon} />
                    </i>
                    <input 
                        placeholder="Pick-up"
                        value=""
                        onChange={() => {}}
                        className={styles.searchCarsRowoneInput}
                    />
                </div>

                <div className={styles.inputWrapper}>
                    <i>
                        <MdLocationPin className={styles.icon} />
                    </i>
                    <input 
                        placeholder="Same as pick-up"
                        value=""
                        onChange={() => {}}
                        className={styles.searchCarsRowoneInput}
                    />
                </div>
{/* 
                <input 
                    placeholder="Same as pick-up"
                    value=""
                    onChange={() => {}}
                    className={styles.searchCarsRowoneInput}
                /> */}
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