import { useState } from "react"
import styles from "./exercises.module.css"
import PageIntro from "../pageIntro/PageIntro"
import ExerciseCard from "../exerciseCard/ExerciseCard"

export default function Exercises({data}) {
    const [index, setIndex] = useState(0)
    
    function prevIndex() {
        setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1))
    }

    function nextIndex() {
        setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1))
    }

    const currentExercise = data[index]
 
    return(
        <div className={styles.sectionWrapper}>
            <PageIntro heading={"DETTE TILBYDER VI"} subheading={"VI TILBYDER EKSKLUSIVE ØVELSER"} />
            <ExerciseCard image={currentExercise.image} title={currentExercise.title} teaser={currentExercise.teaser} />
            <div className={styles.prevNnextBtn}>
                <button onClick={prevIndex} className={styles.btn}>{String.fromCharCode(8592)}</button>
                <button onClick={nextIndex} className={styles.btn}>{String.fromCharCode(8594)}</button>
            </div>
        </div>
    )
}