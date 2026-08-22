import Hero from "../components/header/Hero";
import heroImage from "../assets/headers/mainHeader.jpg"
import Footer from "../components/footer/Footer";
import EmployeeCards from "../components/employeeCards/EmployeeCards";
import { useLoaderData } from "react-router-dom";
import Prices from "../components/prices/Prices";
import Exercises from "../components/exercises/Exercises";

export default function Home() {
    const {employees, prices, exercises} = useLoaderData()

    return (
        <div>
            <Hero 
            image={heroImage} 
            company={"XTREME FITNESS"}
            title="BLIV STÆRK"
            subtitle="Det bedste fitnesscenter - hvor styrke og sundhed vokser sammen"
            ctaBtn/>
            <main>
                <Exercises data={exercises}/>
                <Prices data={prices} />
                <EmployeeCards data={employees} colorSwap/>
            </main>
            <Footer />
        </div>
    )
}