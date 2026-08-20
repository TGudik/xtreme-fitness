import Hero from "../components/header/Hero";
import heroImg from "../assets/headers/servicesHeader.png"
import Footer from "../components/footer/Footer";

export default function Services() {

    return(
        <div>
            <Hero image={heroImg} title="TJENESTER"/>
            <main></main>
            <Footer />
        </div>
    )

}