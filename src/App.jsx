import { Navbar, Footer } from "./components"
import { Routes, Route } from "react-router-dom"
import { Home, Flights, Cars, Activities, NotFound, Signin } from "./pages"

export default function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/flights" element={<Flights />} />
                <Route path="/cars" element={<Cars />} />
                <Route path="/activities" element={<Activities /> } />
                <Route path="/sign-in" element={<Signin /> } />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    )
}