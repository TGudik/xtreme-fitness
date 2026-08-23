import styles from "./prevNnextBtns.module.css"

export default function PrevNnextBtns({prevI, nextI}) {


    return(
        <div className={styles.prevNnextBtn}>
            <button onClick={prevI} className={styles.btn}>{String.fromCharCode(8592)}</button>
            <button onClick={nextI} className={styles.btn}>{String.fromCharCode(8594)}</button>
        </div>
    )
}