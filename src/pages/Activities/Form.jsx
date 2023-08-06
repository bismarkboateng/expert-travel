import { useState } from "react"
import styles from "./Form.module.css";


export default function Form() {
  return (
    <section className={styles.formWrapper}>
        <form className={styles.form}>
            <div className={styles.formDiv}>
                <label>Going to</label>
                <input 
                    type="search"
                    onChange={() => {}}
                    value=""
                    className={styles.input}
                />
            </div>
            <div className={styles.formDiv}>
                <label>Date</label>
                <input 
                    type="date"
                    onChange={() => {}}
                    value=""
                    className={styles.input}
                />
            </div>
            <div className={styles.btnWrapper}>
                <buttton className={styles.btn}>
                    Search
                </buttton>
            </div>
        </form>
    </section>
  )
}
