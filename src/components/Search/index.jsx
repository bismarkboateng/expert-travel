import styles from "./Search.module.css";


export default function index() {
    return (
        <section className={styles.expertSearch}>
            <ul className={styles.expertUnordered}>
                {["Stays", "Flights", "Cars", "Packages", "Things to do", "Cruises"].map((item, index) => (
                    <li key={`${item} - ${index}`}>{ item }</li>
                ))}
            </ul>

            <section>

            </section>
        </section>
    )
}