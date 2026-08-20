import { useLoaderData } from "react-router-dom"
import styles from "./employeeCards.module.css"
import EmployeeCard from "../employeeCard/EmployeeCard"

export default function EmployeeCards() {
    const data = useLoaderData()
    
    return (
        <div className={styles.cardWrapper}>
            {data.map((employee) => {
                return(
                    <EmployeeCard 
                    key={employee._id} 
                    image={employee.image}
                    name={employee.name}
                    area={employee.area}/>
                )
            })}
        </div>
    )

}