import styles from "./footer.module.css"
import logo from "../../assets/icons/logo.png"
import { Facebook, Twitter, Instagram } from "react-bootstrap-icons"

export default function Footer() {

    return (
      <div className={styles.footerWrapper}>
        <div className={styles.footerContent}>
          <img src={logo} alt="Xtreme fitness" />
          <p className={styles.footerText}>
            Hos os handler træning om glæde, kvalitet og resultater
          </p>
          <div className={styles.somes}>
            <Facebook color="#fff" size={40} />
            <Twitter color="#fff" size={40} />
            <Instagram color="#fff" size={40} />
          </div>
          <h3 className={styles.contactHeading}>KONTAKT OS</h3>
          <div className={styles.contactInfo}>
            <h4 className={styles.infoHeading}>Adresse:</h4>
            <p className={styles.infoText}>Nørregade 42, 9000 Aalborg</p>
            <h4 className={styles.infoHeading}>Email:</h4>
            <p className={styles.infoText}>info@xtremefitness.dk</p>
            <h4 className={styles.infoHeading}>Telefon:</h4>
            <p className={styles.infoText}>+ 45 99751642</p>
          </div>
        </div>
      </div>
    );

}