import { useLoaderData } from "react-router-dom"
import PageIntro from "../pageIntro/PageIntro"
import styles from "./prices.module.css"
import PriceCard from "../priceCard/PriceCard"

export default function Prices({data}) {

    return(
        <div className={styles.sectionWrapper}>
            <PageIntro heading={"PRISER"} subheading={"VORES ABONNEMENTER"}/>
            <div className={styles.cardsWrapper}>
                {data.map((price) => {
                    return (
                        <PriceCard key={price._id} image={price.image} title={price.title} price={price.price} list={price.list} />
                    )
                })}
            </div>
        </div>
    )

}