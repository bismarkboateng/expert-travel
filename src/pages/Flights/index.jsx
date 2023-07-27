import { FlightSearch, FlightDestination, FlightDeals, Destinations  } from "../../components"

export default function index() {
    return (
        <section>
            <FlightSearch />
            <FlightDestination />
            <FlightDeals />
            <Destinations />
        </section>
    )
}