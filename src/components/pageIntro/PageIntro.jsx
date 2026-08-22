import styles from "./pageIntro.module.css"

export default function PageIntro({heading, subheading, colorSwap}) {

    return (
        <div className={`${styles.textWrapper} ${colorSwap && styles.colorSwap}`}>
            <h3>{heading}</h3>
            <h4>{subheading}</h4>
        </div>
    )

}