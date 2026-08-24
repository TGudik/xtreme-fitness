import Hero from "../components/header/Hero";
import heroImage from "../assets/headers/mainHeader.jpg"
import Footer from "../components/footer/Footer";
import EmployeeCards from "../components/employeeCards/EmployeeCards";
import { useLoaderData } from "react-router-dom";
import Prices from "../components/prices/Prices";
import Exercises from "../components/exercises/Exercises";
import ServiceCards from "../components/serviceCards/ServiceCards";
import Reviews from "../components/reviews/Reviews";
import BlogCard from "../components/blogCard/BlogCard";
import AboutSection from "../components/aboutSection/AboutSection";
import Contact from "../components/contact/Contact";

export default function Home() {
    const {employees, prices, exercises, services, reviews, blogs} = useLoaderData()

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
                <AboutSection homePage/>
                <ServiceCards data={services}/>
                <Reviews data={reviews} />
                <Prices data={prices} />
                <EmployeeCards data={employees} colorSwap/>
                <Contact />
                <BlogCard data={blogs} />
            </main>
            <Footer />
        </div>
    )
}