import styles from "./Hero.module.css";
import { Image01 } from "../../assets";



export default function index() {
    return (
        <section className={styles.expertHero}>
           {/* <img src={Image01} className={styles.expertHeroImage} alt="Hero section image" /> */}
            <section className={styles.expertHeroDescription}>
                <h1>One Key rewards</h1>
                <h1>any way you travel</h1>
                <p>
                    Expedia Rewards is now one Key, a rewards <br />
                    program giving you more ways to earn and use on <br />
                    travel
                </p>
                <button className={styles.expertHeroDescriptionButton}>
                    Learn more about One Key
                </button>
            </section>
        </section>
    )
}