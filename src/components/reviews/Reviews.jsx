import styles from "./reviews.module.css"
import reviewBg from "../../assets/images/reviews_background.jpg"
import apostrophy from "../../assets/icons/testimonials_apostrophy.png"
import PrevNnextBtns from "../prevNnextBtns/PrevNnextBtns"
import ReviewCard from "../reviewCard/ReviewCard";
import reviewImg from "../../assets/images/reviews.png"
import { useState } from "react";

export default function Reviews({data}) {
    const [index, setIndex] = useState(0)
    const current = data[index]
    
    function prevI() {
        setIndex((prev) => (prev === 0 ? prev = data.length - 1 : prev - 1))
    }

    function nextI() {
        setIndex((prev) => (prev === data.length - 1 ? prev = 0 : prev + 1))
    }

    return (
    <div className={styles.reviewsWrapper}>
      <img className={styles.reviewBg} src={reviewBg} />
      <div className={styles.reviewsContent}>
          <div className={styles.sectionIntro}>
              <h3 className={styles.sectionHeading}>UDTALELSER</h3>
              <h4 className={styles.sectionSubheading}>DET SIGER VORES KUNDER OM OS</h4>
          </div>
          <div className={styles.reviewContent}>
            <img className={styles.apostrophy} src={apostrophy} alt="apostrophy" />
            <ReviewCard content={current.content} author={current.author} position={current.position}/>
            <PrevNnextBtns prevI={prevI} nextI={nextI}/>
            <img className={styles.reviewImg} src={reviewImg} />
          </div>
      </div>
    </div>
    )
}