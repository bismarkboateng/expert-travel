import { useState } from "react"
import styles from "./Form.module.css";
import { MdLocationPin } from "react-icons/md";
import { MdDateRange } from "react-icons/md";




export default function Form() {
  const [searchField, setSearchField] = useState({
    destination: "",
    date: ""
  })

  function handleSearchFieldChange(event) {
    const { name, value } = event.target;
    setSearchField(prevSearchField => ({...prevSearchField, [name]: value}))
  }


  function onSearchFieldSearchHanlder(event) {
    event.preventDefault();

    // just loggin to the console
    console.log(searchField);

    setSearchField({
        destination: "",
        date: ""
    })
  }

  return (
    <section className={styles.formWrapper}>
        <form className={styles.form} onSubmit={onSearchFieldSearchHanlder}>
            <div className={styles.formDiv}>
                <i>
                    <MdLocationPin className={styles.icon} />
                </i>
                <input 
                    type="search"
                    name="destination"
                    id="destination"
                    onChange={handleSearchFieldChange}
                    value={searchField.destination}
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
                    name="date"
                    id="date"
                    onChange={handleSearchFieldChange}
                    value={searchField.date}
                    placeholder="Aug 22 - Aug 23"
                    className={styles.input}
                />
            </div>

            <div className={styles.btnWrapper}>
                <button type="submit" className={styles.btn}>
                    Search
                </button>
            </div>
        </form>
    </section>
  )
}
