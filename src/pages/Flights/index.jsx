import { FlightSearch, FlightDestination, FlightDeals, Destinations, BookingTips  } from "../../components"

export default function index() {
    return (
        <section>
            <FlightSearch />
            <FlightDestination />
            <FlightDeals />
            <BookingTips />
            <Destinations />
        </section>
    )
}