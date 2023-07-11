import FlightSearchStyles from "./FlightSearch.module.css";
import { Choice } from "./constants";


export default function index() {
    return (
        <section className={FlightSearchStyles.flightSearch}>
            <h1 className={FlightSearchStyles.flightText}>Search flights</h1>

            <ul className={FlightSearchStyles.flightsUnordered}>
                { Choice.map((item) => (
                    <li className={flightsList} key={item.name}> { item.name }</li>
                ))}
                <li>Economy</li>

            </ul>
            <div className={flights} />
        </section>
    )
}