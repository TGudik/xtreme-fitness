import styles from "./serviceCard.module.css"

export default function ServiceCard({image, title, teaser, icon}) {

    return(
        <div className={styles.cardWrapper}>
            <img className={styles.serviceImg} src={image} alt={title} />
            <div className={styles.textArea}>
                <img src={icon} className={styles.serviceIcon} />
                <h3 className={styles.serviceTitle}>{title}</h3>
                <p className={styles.serviceText}>{teaser}</p>
            </div>
        </div>
    )
}