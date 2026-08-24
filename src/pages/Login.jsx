import Footer from "../components/footer/Footer";
import Hero from "../components/header/Hero";
import PageIntro from "../components/pageIntro/PageIntro";
import SignInForm from "../components/signInField/SignInForm";


export default function Login() {
    
    
    return (
        <div>
            <Hero title={"LOG IND"}/>
            <main>
                <PageIntro heading={"LOG IND FOR AT TILMELDE DIG EN TRÆNING"} subheading={"LOG IND"} />
                <SignInForm />
            </main>
            <Footer />
        </div>
    )
}