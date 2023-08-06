import styles from "./Travels.module.css";
import Data from "./Data";
import { secondList } from "./Data";


export default function index() {
  return (
   <section className={styles.travel}>
    <h1 className={styles.travelHeader}>More activities for your travels</h1>
    <section className={styles.travelItemsWrapper}>
      { Data.map((item) => (
        <li key={item.index} className={styles.travelItem}>
          <img src={item.image} alt={item.title} className={styles.travelItemImage} />
          <div className={styles.travelItemTitle}>{ item.title }</div>
          <div className={styles.travelItemText}>{ item.subtext }</div>
        </li>
      ))}
    </section>

    <section className={styles.secondTravelItemsWrapper}>
      {
        secondList.map((item) => (
          <li key={item.index} className={styles.travelItem}>
            <img src={item.image} alt={item.subtext} className={styles.secondTravelItemImage} />
            <div className={styles.travelItemTitle}>{ item.title }</div>
            <div className={styles.travelItemText}>{ item.subtext }</div>
          </li>
        ))
      }
    </section>
   </section>
  )
}
