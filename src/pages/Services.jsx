import Hero from "../components/header/Hero";
import heroImg from "../assets/headers/servicesHeader.png"
import Footer from "../components/footer/Footer";
import Exercises from "../components/exercises/Exercises";
import { useLoaderData } from "react-router-dom";
import ServiceCards from "../components/serviceCards/ServiceCards";

export default function Services() {
    const {exercises, services} = useLoaderData()

    return(
        <div>
            <Hero image={heroImg} title="TJENESTER"/>
            <main>
                <Exercises data={exercises} />
                <ServiceCards data={services} />
            </main>
            <Footer />
        </div>
    )

}