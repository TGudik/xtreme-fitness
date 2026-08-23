import Hero from "../components/header/Hero";
import heroImg from "../assets/headers/aboutHeader.png"
import Footer from "../components/footer/Footer";
import { useLoaderData } from "react-router-dom";
import BlogCard from "../components/blogCard/BlogCard";
import AboutSection from "../components/aboutSection/AboutSection";

export default function About() {
    const {blogs} = useLoaderData()

    return(
        <div>
            <Hero image={heroImg} title={"OM OS"}/>
            <main>
                <AboutSection />
                <BlogCard data={blogs} />
            </main>
            <Footer />
        </div>
    )

}