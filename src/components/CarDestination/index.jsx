import styles from  "./CarDestination.module.css";
import Data from "./Data";


export default function index() {
    return (
        <section>
            <ul className={styles.carDestUnordered}>
                { Data.map((item) => (
                    <li className={styles.carDestUnorderedItem}>
                        <img src={item.image} alt={item.title} className={styles.carDestUnorderedItemImage} />
                        <p className={styles.carDestUnorderedItemText}> { item.title }</p>
                    </li>
                )) }
            </ul>
        </section>
    )
}