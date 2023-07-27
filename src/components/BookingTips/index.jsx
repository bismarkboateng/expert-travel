import { TipQR, TipsImage } from "../../assets"
import styles from "./BookingTips.module.css"



export default function index() {
    return (
        <section className={styles.bookingTipsWrapper}>
           <h2 className={styles.bookingTipsHeader}>Tips on booking cheap flights</h2>

            <div className={styles.bookingTipsCta}>
                <img src={TipsImage} alt="booking tips image" className={styles.bookingTipsImage} />
                <div className={styles.bookingTipsContent}>
                    <h2 className={styles.bookingTipsContentHeader}>Go further with the Expedia app</h2>
                    <p className={styles.bookingTipsContentText}>
                        Save even more - get up to 20% on select hotels when you book on the app. Our <br />
                        app deals help you to save on trips so you can travel more and manage it all on <br />
                        the go
                    </p>
                    <h5 className={styles.bookingTipsContentScan}>Scan the QR code with your device camera and download our app</h5>
                </div>
                <img src={TipQR} alt="booking tips Qr" className={styles.bookingTipsQr} />
            </div>
        </section>
    )
}