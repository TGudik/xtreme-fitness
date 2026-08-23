import CtaBtn from "../ctaBtn/CtaBtn";
import styles from "./hero.module.css"
import { Link } from "react-router-dom"


export default function Hero({image, company, title, subtitle, ctaBtn}) {


    return (
      <div className={styles.heroWrapper}>
        {image && <img className={styles.heroImage} src={image} alt={"hero billede"} />}
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroTextWrapper}>
          {company && <h2>{company}</h2>}
          {title && <h1>{title}</h1>}
          {subtitle && <h3>{subtitle}</h3>}
          {ctaBtn && (
            <CtaBtn />
          )}
        </div>
      </div>
    );

}