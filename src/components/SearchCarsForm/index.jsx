import styles from "./SearchCarsForm.module.css";
import { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import Button from "../../components/Button";






export default function index() {
    const[carsInputFormField, setCarsInputFormfield] = useState({
        pickUpLoc: "",
        samePickUpLoc: "",
        pickUpDate: "",
        dropOffDate: "",
        pickUpTime: "",
        dropOffTime: ""
    })

    function handleFieldChange(event) {
        const { name, value } = event.target;

        setCarsInputFormfield(prevCarsFormField => ({...prevCarsFormField, [name]: value }))
        // handle input change
    }

    function onFormSubmit(event) {
        event.preventDefault();
        // send data to backend api 

        console.log(carsInputFormField);

        setCarsInputFormfield({
            pickUpLoc: "",
            samePickUpLoc: "",
            pickUpDate: "",
            dropOffDate: "",
            pickUpTime: "",
            dropOffTime: ""
        })
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
                        name="pickUpLoc"
                        id="pickUpLoc"
                        value={carsInputFormField.pickUpLoc}
                        onChange={handleFieldChange}
                        className={styles.searchCarsRowoneInput}
                    />
                </div>

                <div className={styles.inputWrapper}>
                    <i>
                        <MdLocationPin className={styles.icon} />
                    </i>
                    <input 
                        placeholder="Same as pick-up"
                        name="samePickUpLoc"
                        id="samePickUpLoc"
                        value={carsInputFormField.samePickUpLoc}
                        onChange={handleFieldChange}
                        className={styles.searchCarsRowoneInput}
                    />
                </div>
            </div>
            
            <div className={styles.searchCarsRowtwo}>
                <input
                    placeholder="Pick-up date"
                    name="pickUpDate"
                    id="pickUpDate"
                    type="date"
                    value={carsInputFormField.pickUpDate}
                    onChange={handleFieldChange}
                    className={styles.searchCarsRowtwoInput}
                />

                <input 
                    placeholder="Drop of date"
                    name="dropOffDate"
                    id="dropOffDate"
                    type="date"
                    value={carsInputFormField.dropOffDate}
                    onChange={handleFieldChange}
                    className={styles.searchCarsRowtwoInput}
                />
                <input 
                    placeholder="Pick-up time"
                    name="pickUpTime"
                    id="pickUpTime"
                    type="time"
                    value={carsInputFormField.pickUpTime}
                    onChange={handleFieldChange}
                    className={styles.searchCarsRowtwoInput}
                />

                <input 
                    placeholder="Drop of time"
                    name="dropOffTime"
                    id="dropOffTime"
                    type="time"
                    value={carsInputFormField.dropOffTime}
                    onChange={handleFieldChange}
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
            <Button />
        </form>
    )
}