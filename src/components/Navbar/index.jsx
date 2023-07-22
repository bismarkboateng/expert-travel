import NavbarStyles from "./Navbar.module.css"
// import { Links } from "./constants"
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { BsFillBagFill } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";


const Links = [
    {title: "English", index: 0},
    {title: "List your property", index: 1},
    {title: "Support", index: 2},
    {title: "Trips", index: 3},
    { title: <BsBellFill />, index: 4},
    {title: "Sign in", index: 5}
]




export default function index() {
    const [ mobile, setMobile ] = useState({
        search: false,
        bag: false,
        profile: false
    })

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

            <ul className={NavbarStyles.mobLinks}>
                <li className={NavbarStyles.mobItem}><HiOutlineSearch /></li>
                <li className={NavbarStyles.mobItem}><BsFillBagFill /></li>
                <li className={NavbarStyles.mobItem}><RiAccountCircleFill /></li>

            </ul>

           </div>
        </section>
    )
}