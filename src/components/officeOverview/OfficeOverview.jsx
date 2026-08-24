import { Link } from "react-router-dom"
import styles from "./officeOverview.module.css"

export default function OfficeOverview() {

    return(
        <div>
            <Link to={"/backoffice/edit"} className={styles.backofficeBlog}>Blogs</Link>
        </div>
    )

}