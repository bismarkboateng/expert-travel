import styles from "./Footer.module.css";
import { Company, Explore, Policies, Help } from "./Data";


export default function index() {
    return (
        <section className={styles.expertFooterWrapper}>
            <h1>expedia group</h1>
            <section className={styles.expertFooterLinksWrapper}>
                <section className={styles.expertFooterLinks}>
                    <p>Company</p>
                    { Company.map((item) => (
                        <li key={item.index}>{ item.title }</li>
                    ))}
                </section>

                <section className={styles.expertFooterLinks}>
                    <p>Explore</p>
                    { Explore.map((item) => (
                        <li className={styles.link} key={item.index}>{ item.title }</li>
                    ))}
                </section>

                <section className={styles.expertFooterLinks}>
                    <p>Policies</p>
                    { Policies.map((item) => (
                        <li key={item.index}>{ item.title }</li>
                    ))}
                </section>

                <section className={styles.expertFooterLinks}>
                    <p>Help</p>
                    { Help.map((item) => (
                        <li key={item.index}>{ item.title }</li>
                    ))}
                </section>
            </section>
           
        </section>
    )
}