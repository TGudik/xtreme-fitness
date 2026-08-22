import Hero from "../components/header/Hero";
import heroImg from "../assets/headers/subscriptionsHeader.png"
import Footer from "../components/footer/Footer";
import Prices from "../components/prices/Prices";
import { useLoaderData } from "react-router-dom";

export default function Subscriptions() {

    const data = useLoaderData()

    return(
        <div>
            <Hero image={heroImg} title="PRISER"/>
            <main>
                <Prices data={data}/>
            </main>
            <Footer />
        </div>
    )

}