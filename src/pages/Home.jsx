import Hero from "../components/header/Hero";
import heroImage from "../assets/headers/mainHeader.jpg"
import Footer from "../components/footer/Footer";
import EmployeeCards from "../components/employeeCards/EmployeeCards";
import { useLoaderData } from "react-router-dom";
import Prices from "../components/prices/Prices";

export default function Home() {
    const {employees, prices} = useLoaderData()

    return (
        <div>
            <Hero 
            image={heroImage} 
            company={"XTREME FITNESS"}
            title="BLIV STÆRK"
            subtitle="Det bedste fitnesscenter - hvor styrke og sundhed vokser sammen"
            ctaBtn/>
            <main>
                <Prices data={prices} />
                <EmployeeCards data={employees} colorSwap/>
            </main>
            <Footer />
        </div>
    )
}