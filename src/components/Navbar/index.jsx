import NavbarStyles from "./Navbar.module.css"
import { Links } from "./constants"

export default function index() {
    return (
        <section className={NavbarStyles.navbarWrapper}>
           <div className={NavbarStyles.navbarContent}>
            <div className={NavbarStyles.logoText}>
                <img src="https://www.expedia.com/_dms/header/logo.svg?locale=en_US&siteid=1&2&3ec60977" alt="expert travel logo" className={NavbarStyles.expertImage} />
                <small className={NavbarStyles.imageText}>More Travel </small>
            </div>

            <ul className={NavbarStyles.list}>
                { Links.map((link) => (
                    <li key={link.index} className={NavbarStyles.listItem}> 
                        { link.title }
                    </li>
                )) }
            </ul>
           </div>
        </section>
    )
}