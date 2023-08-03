import styles from "./TopThings.module.css"
import Data from "./Data"



export default function index() {
    
    return (
        <section className={styles.topWrapper}>
            <h1 className={styles.topWrapperHeader}>Top things to do in the U.S</h1>
            <ul className={styles.topUnordered}>
                { Data.map((item) => (
                    <li className={styles.topUnorderedItem} key={item.index}>
                        <img src={item.image} alt={item.title} className={styles.topUnorderedItemImage} />
                        <p className={styles.topUnorderedItemTitle} >{ item.title }</p>
                        <p className={styles.topUnorderedItemSub}>{ item.subtext }</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}