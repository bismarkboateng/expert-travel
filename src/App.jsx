import { Navbar, Footer } from "./components"
import { Routes, Route } from "react-router-dom"
import { Home, Flights, Cars, Activities, NotFound, Signin, FlightSearch } from "./pages"
import "./App.css"



export default function App() {
    return (
        <>
        <Navbar />
        <div className="app">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/flights" element={<Flights />} />
                <Route path="/cars" element={<Cars />} />
                <Route path="/activities" element={<Activities /> } />
                <Route path="/sign-in" element={<Signin /> } />
                <Route path="/flight-search" element={<FlightSearch />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
        </>
    )
}