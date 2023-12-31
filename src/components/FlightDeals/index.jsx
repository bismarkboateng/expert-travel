import Data from "./Data"
import styles from "./FlightDeals.module.css"
import { Link } from "react-router-dom"



export default function index() {
    return (
        <section className={styles.flightDeals}>
            <div className={styles.flightDealsHeading}>Flight deals departing near you</div>
            <ul className={styles.flightDealsUnordered}>
                { Data.map((item) => (
                    <Link to="" style={{ textDecoration: "none" }}>
                        <li key={item.index} className={styles.flightDealsItem} >
                            <img src={item.image} alt="departing image" className={styles.flightDealsImage} />
                            <small className={styles.flightDealsSubtitle}>{item.subtitle}</small>
                            <div className={styles.flightDealsTitle}>{item.title}</div>
                        </li>
                    </Link>
                ))}
            </ul>
        </section>
    )
}