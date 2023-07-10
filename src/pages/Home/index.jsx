import { Navbar, Search, Hero, Gallery, Destinations, Footer } from "../../components"

export default function index() {
    return (
        <section>
            <Navbar />
            <Search />
            <Hero />
            <Gallery />
            <Destinations />
            <Footer />
        </section>
    )
}