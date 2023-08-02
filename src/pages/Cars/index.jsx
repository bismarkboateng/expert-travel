import { Destinations, CarChoices, SearchCarsForm } from "../../components"

export default function index() {
    return (
        <section>
            <SearchCarsForm />
            <CarChoices />
            <Destinations />
        </section>
    )
}