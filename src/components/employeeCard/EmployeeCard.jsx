import { Link } from "react-router-dom"
import styles from "./employeeCard.module.css"
import { Facebook, Twitter, Instagram } from "react-bootstrap-icons"

export default function EmployeeCard({image, name, area}) {

    return (
      <div className={styles.cardWrapper}>
        <img className={styles.empImage} src={image} alt={`${name}`} />
        <div className={styles.nameNarea}>
            <h3>{name}</h3>
            <p>{area}</p>
        </div>
        <div className={styles.someIcons}>
          <Link target="_blank" to="https://www.facebook.com" className={styles.someBg}>
            <Facebook color="#fff" size={30} />
          </Link>
          <Link target="_blank" to="https://www.twitter.com" className={styles.someBg}>
            <Twitter color="#fff" size={30} />
          </Link>
          <Link target="_blank" to="https://www.instagram.com" className={styles.someBg}>
            <Instagram color="#fff" size={30} />
          </Link>
        </div>
      </div>
    );

}