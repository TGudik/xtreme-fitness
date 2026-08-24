import { useState } from "react"
import styles from "./navigation.module.css"
import { Link } from "react-router-dom"
import logo from "../../assets/icons/logo.png"
import Hamburger from "hamburger-react"
import { useAuth } from "../../context/AuthContext"

export default function Navigation() {
    const [open, setOpen] = useState(false)
    const {user, logout} = useAuth()

    return (
      <div className={styles.navWrapper}>
        <Link onClick={() => setOpen(false)} to="/">
          <img src={logo} alt="Extreme Fitness" />
        </Link>
        <div className={styles.menuWrapper}>
          <div className={styles.navRigth}>
            {user && <h1 onClick={logout} className={styles.logoutBtn}>LOG UD</h1>}
            {user?.role === "admin" && <Link className={styles.backofficeLink} to="/backoffice">BACKOFFICE</Link>}
            <div className={styles.burger}>
              <Hamburger color="#fff" toggled={open} toggle={setOpen} size={35} />
            </div>
          </div>
          <ul
            onClick={() => setOpen(false)}
            className={`${styles.menu} ${open ? styles.open : ""}`}
          >
            <li onClick={() => setOpen(false)}>
              <Link className={styles.navLink} to="/tjenester">
                Tjenester
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link className={styles.navLink} to="/medarbejdere">
                Trænere
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link className={styles.navLink} to="/priser">
                Priser
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link className={styles.navLink} to="/om">
                Om Os
              </Link>
            </li>
            {!user && <li onClick={() => setOpen(false)}>
              <Link to="/login" className={styles.navLink}>Log ind</Link>
            </li>}
          </ul>
        </div>
      </div>
    );

}