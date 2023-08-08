import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";


export default function index() {
    return (
        <section className={styles.notFound}>
            <h1 className={styles.notFoundText}>Sorry, it seems we've taken a wrong turn</h1>
        </section>
    )
}