import styles from "./reviewCard.module.css"

export default function ReviewCard({author, content, position}) {


    return (
      <div className={styles.reviewCard}>
        <p className={styles.contentText}>{content}</p>
        <h3 className={styles.reviewName}>{author}</h3>
        <h4 className={styles.reviewPosition}>{position}</h4>
      </div>
    );
}