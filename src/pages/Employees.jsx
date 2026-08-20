import Hero from "../components/header/Hero";
import heroImg from "../assets/headers/employeesHeader.jpg"
import Footer from "../components/footer/Footer";
import PageIntro from "../components/pageIntro/PageIntro";
import EmployeeCards from "../components/employeeCards/EmployeeCards";

export default function Employees() {

    return(
        <div>
            <Hero image={heroImg} title="TRÆNERE"/>
            <main>
                <PageIntro heading="TRÆNERE" subheading={"VORES HOLD AF EKSPERTER"}/>
                <EmployeeCards />
            </main>
            <Footer />
        </div>
    )

}