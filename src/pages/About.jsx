import Hero from "../components/header/Hero";
import heroImg from "../assets/headers/aboutHeader.png"
import Footer from "../components/footer/Footer";

export default function About() {

    return(
        <div>
            <Hero image={heroImg} title={"OM OS"}/>
            <main></main>
            <Footer />
        </div>
    )

}