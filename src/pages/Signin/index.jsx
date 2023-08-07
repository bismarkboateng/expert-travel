// import { useState } from "react";
import { AiFillApple } from "react-icons/ai";
import { GrFacebook } from "react-icons/gr";
import styles from "./Signin.module.css";




export default function index() {
    return (
        <section className={styles.signin}>
            <img src="https://www.expedia.com/_dms/header/logo.svg?locale=en_US&siteid=1&2&3ec60977" alt="expert travel logo" className={styles.expedia} />
            <div className={styles.signinCreate}>Sign in or create an account</div>
            <p className={styles.pText}>Unlock a world of rewards with one account across Expedia, <br />
               Hotels.com, and Vrbo.
            </p>

            <div className={styles.googleBtn}>
                <img />
                <button>
                    Sign in with Google
                </button>
            </div>

            <form className={styles.siginForm}>
                <input 
                    placeholder="Email"
                    className={styles.signinInput}
                    type="email"
                    name="email"
                    onChange={() => {}}
                    value=""
                />

                <div className={styles.formText}>Please enter your email address.</div>

                <button className={styles.signinBtn}>
                    Continue
                </button>
            </form>

            <div className={styles.signinP}>Other ways to sign in</div>

            <div className={styles.links}>
                <AiFillApple />
                <GrFacebook className={styles.fb}/>
            </div>
        
        </section>
    )
}