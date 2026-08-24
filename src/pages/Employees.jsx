import Hero from "../components/header/Hero";
import heroImg from "../assets/headers/employeesHeader.jpg"
import Footer from "../components/footer/Footer";
import EmployeeCards from "../components/employeeCards/EmployeeCards";
import { useLoaderData } from "react-router-dom";
import BlogCard from "../components/blogCard/BlogCard";
import Contact from "../components/contact/Contact";

export default function Employees() {

    const {employees, blogs} = useLoaderData()

    return(
        <div>
            <Hero image={heroImg} title="TRÆNERE"/>
            <main>
                <EmployeeCards data={employees}/>
                <Contact />
                <BlogCard data={blogs} />
            </main>
            <Footer />
        </div>
    )

}