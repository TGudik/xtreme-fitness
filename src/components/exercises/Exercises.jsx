import { useState } from "react"
import styles from "./exercises.module.css"
import PageIntro from "../pageIntro/PageIntro"
import ExerciseCard from "../exerciseCard/ExerciseCard"
import PrevNnextBtns from "../prevNnextBtns/PrevNnextBtns"

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
            <PrevNnextBtns prevI={prevIndex} nextI={nextIndex}/>
        </div>
    )
}