import styles from "./Destinations.module.css";
import { Image07 } from "../../assets"
import { BookingTips } from "..";

export default function index() {

    const sampleLinks = [
        "Hotels", "New York hotels", "Miami hotels", "Chicago hotels", "Myrtie Beach hotels"
    ]

    return (
        <section className={styles.expertDestinationWrapper}>
           <img src={Image07} alt="destination image"
                 className={styles.expertDestinationImage}
            />
            <BookingTips />
            <section className={styles.expertDestination}>
                <p className={styles.expertDestinationTitle}>Explore a world of travel with Expedia</p>
                <div className={styles.expertDestinationText}>Hotel deals on top domestic destinations</div>
                { sampleLinks.map((item, index) => (
                    <li className={styles.expertDestinationItem} key={index}>{ item }</li>
                ))}
            </section>
        </section>
    )
}