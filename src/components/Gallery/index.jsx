import styles from "./Gallery.module.css"
import { firstPart, secondPart } from "./Data";


export default function index() {
    return (
        <section className={styles.expertGalleryWrapper}>
            <section className={styles.expertGalleryItemWrapper}>
                { firstPart.map((item) => (
                    <li key={item.index} className={styles.expertGalleryItem}>
                        <img src={item.image} 
                            alt={`gallery image ${item.index}`} 
                            className={styles.expertGalleryItemImage}
                        />
                        <small className={styles.expertGallerySubtitle}>{ item.subtitle }</small>
                        <h5 className={styles.expertGalleryText}>{ item.text }</h5>
                    </li>
                ))}
            </section>
        
            <section className={styles.expertGalleryItemWrapper}>
            { secondPart.map((item) => (
                    <li key={item.index} className={styles.expertGallerySecondItem}>
                        <img src={item.image} 
                            alt={`gallery image ${item.index}`} 
                            className={styles.expertGallerySecondItemImage}
                        />
                        <small className={styles.expertGallerySubtitle}>{ item.subtitle }</small>
                        <h5 className={styles.expertGalleryText}>{ item.text }</h5>
                    </li>
                ))}
            </section>
        </section>
    )
}