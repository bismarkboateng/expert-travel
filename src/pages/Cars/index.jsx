import { Destinations, CarChoices, SearchCarsForm, CarDestination } from "../../components";
import Button from "../../components/Button";
import styles from "./Cars.module.css";



export default function index() {
    return (
        <section>
            <p style={{ marginTop: "20px", fontSize: "40px", fontWeight: "400", marginBottom: "20px"}}>Search Cars</p>
            <div className={styles.buttonWrapper}>
                <div className={styles.rentalButtonWrapper}
                    // toggle a different form on click
                    onClick={() => {}}
                >
                    Rental Cars
                </div>

                <div className={styles.airpotButtonWrapper}
                    // toggle a different form on click
                    onClick={() => {}}
                >
                    Airpot transportation
                </div>
            </div>
            <SearchCarsForm />
            <Button />
            <CarChoices />
            <CarDestination />
            <Destinations />
        </section>
    )
}