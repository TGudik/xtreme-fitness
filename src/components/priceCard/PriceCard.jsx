import styles from "./priceCard.module.css"

export default function PriceCard({image, price, title, list}) {

    return(
        <div className={styles.cardWrapper}>
            <div className={styles.imgNprice}>
                <img src={image} alt={title} />
                <div className={styles.priceWrapper}>
                    <h4>{price} DKK</h4>
                    <p>Mdr</p>
                </div>
            </div>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.listWrapper}>
                {list.map((item) => {
                    return(
                        <div key={item.slice(0,5)} className={styles.listItem}>
                            <span className={styles.check}>{String.fromCharCode(10003)}</span> 
                            <span>{item}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}