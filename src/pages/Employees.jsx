import Hero from "../components/header/Hero";
import heroImg from "../assets/headers/employeesHeader.jpg"
import Footer from "../components/footer/Footer";

export default function Employees() {

    return(
        <div>
            <Hero image={heroImg} title="TRÆNERE"/>
            <main></main>
            <Footer />
        </div>
    )

}