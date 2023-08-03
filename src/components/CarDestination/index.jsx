import styles from  "./CarDestination.module.css";
import Data from "./Data";


export default function index() {
    return (
        <section>
            <h1>Trending Rent a Car Destinations </h1>
            <ul className={styles.carDestUnordered}>
                { Data.map((item) => (
                    <li key={item.index} className={styles.carDestUnorderedItem}>
                        <img src={item.image} alt={item.title} className={styles.carDestUnorderedItemImage} />
                        <p className={styles.carDestUnorderedItemText}> { item.title }</p>
                    </li>
                )) }
            </ul>
        </section>
    )
}