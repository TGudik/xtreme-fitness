import styles from "./exerciseCard.module.css"

export default function ExerciseCard({image, title, teaser}) {

    return (
        <div className={styles.cardWrapper}>
            <img className={styles.exerciseImg} src={image} alt={title} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.teaser}>{teaser}</p>
        </div>
    )

}