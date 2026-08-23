import Hero from "../components/header/Hero";
import heroImg from "../assets/headers/subscriptionsHeader.png"
import Footer from "../components/footer/Footer";
import Prices from "../components/prices/Prices";
import { useLoaderData } from "react-router-dom";
import Reviews from "../components/reviews/Reviews";

export default function Subscriptions() {

    const {prices, reviews} = useLoaderData()

    return(
        <div>
            <Hero image={heroImg} title="PRISER"/>
            <main>
                <Prices data={prices}/>
                <Reviews data={reviews}/>
            </main>
            <Footer />
        </div>
    )

}