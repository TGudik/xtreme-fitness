import Hero from "../components/header/Hero";
import heroImg from "../assets/headers/employeesHeader.jpg"
import Footer from "../components/footer/Footer";
import EmployeeCards from "../components/employeeCards/EmployeeCards";
import { useLoaderData } from "react-router-dom";

export default function Employees() {

    const data = useLoaderData()

    return(
        <div>
            <Hero image={heroImg} title="TRÆNERE"/>
            <main>
                <EmployeeCards data={data}/>
            </main>
            <Footer />
        </div>
    )

}