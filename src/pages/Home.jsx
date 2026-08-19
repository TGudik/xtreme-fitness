import Hero from "../components/header/Hero";
import heroImage from "../assets/headers/mainHeader.jpg"

export default function Home() {
    return (
        <div>
            <Hero 
            image={heroImage} 
            company={"XTREME FITNESS"}
            title="BLIV STÆRK"
            subtitle="Det bedste fitnesscenter - hvor styrke og sundhed vokser sammen"
            ctaBtn/>

        </div>
    )
}