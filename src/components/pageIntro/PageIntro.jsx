import styles from "./pageIntro.module.css"

export default function PageIntro({heading, subheading}) {

    return (
        <div className={styles.textWrapper}>
            <h3>{heading}</h3>
            <h4>{subheading}</h4>
        </div>
    )

}