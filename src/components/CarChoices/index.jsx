
import styles from "./CarChoices.module.css";
import Data from "./Data";


export default function index() {

    return (
        <section className={styles.carChoice}>
            <h1>Popular Rental Car Choices</h1>
            <ul className={styles.carChoiceWrapper}>
                { Data.map((item) => (
                    <li key={item.index} className={styles.carChoiceItem}>
                        <img src={item.image} alt={item.text} className={styles.carChoiceItemImage} />
                        <div className={styles.test}>
                            <p className={styles.carChoiceItemText}>{ item. text }</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}