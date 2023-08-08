// import { useState } from "react"
import styles from "./Form.module.css";
import { MdLocationPin } from "react-icons/md";
import { MdDateRange } from "react-icons/md";



export default function Form() {
  return (
    <section className={styles.formWrapper}>
        <form className={styles.form}>
            <div className={styles.formDiv}>
                <i>
                    <MdLocationPin className={styles.icon} />
                </i>
                <input 
                    type="search"
                    onChange={() => {}}
                    value=""
                    placeholder="Going to"
                    className={styles.input}
                />
            </div>

            <div className={styles.formDiv}>
                <i>
                    <MdDateRange className={styles.icon} />
                </i>
                <input 
                    type="date"
                    onChange={() => {}}
                    value=""
                    placeholder="Aug 22 - Aug 23"
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
