import { Destinations, BookingTips, SearchCarsForm } from "../../components"

export default function index() {
    return (
        <section>
            <SearchCarsForm />
            <BookingTips />
            <Destinations />
        </section>
    )
}