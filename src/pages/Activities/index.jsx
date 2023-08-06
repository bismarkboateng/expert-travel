import { TopThings, Travels, Destinations } from "../../components";
import Form from "./Form";
import styles from "./Activities.module.css";



export default function index() {
    return (
        <section>
            <h1 className={styles.search}>Search things to do</h1>
            <Form />
            <TopThings />
            <Travels />
            <Destinations />
        </section>
    )
}