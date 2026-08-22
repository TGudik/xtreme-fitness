import { Link } from "react-router-dom";
import styles from "./ctaBtn.module.css"

export default function CtaBtn(secondaryColor) {

    return (
      <Link to="/tilmeld" className={`${styles.ctaBtn} ${secondaryColor && styles.secColor}`}>
        Tilmeld dig nu <div>{String.fromCharCode(9658)}</div>
      </Link>
    );

}