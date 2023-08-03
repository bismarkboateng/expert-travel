import { Destinations, CarChoices, SearchCarsForm, CarDestination } from "../../components"

export default function index() {
    return (
        <section>
            <SearchCarsForm />
            <CarChoices />
            <CarDestination />
            <Destinations />
        </section>
    )
}