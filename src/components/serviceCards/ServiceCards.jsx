import CtaBtn from "../ctaBtn/CtaBtn"
import ServiceCard from "../serviceCard/ServiceCard"
import styles from "./serviceCards.module.css"

export default function ServiceCards({data}) {


    return (
        <div className={styles.sectionWrapper}>
            <div className={styles.sectionIntro}>
                <h4 className={styles.introHeading}>VORES TJENESTER</h4>
                <h3 className={styles.introSubheading}>LØSNINGER TIL AT BEVÆGE SIG BEDRE OG FØLE SIG SUNDERE</h3>
            </div>
            <div className={styles.cardsWrapper}>
                {data.map((service) => {
                    return (
                        <ServiceCard key={service._id} image={service.image} title={service.title} teaser={service.teaser} icon={service.icon}/>
                    )
                })}
            </div>
            <CtaBtn secondaryColor/>
        </div>
    )

}