import { useLoaderData } from "react-router-dom"
import styles from "./employeeCards.module.css"
import EmployeeCard from "../employeeCard/EmployeeCard"
import PageIntro from "../pageIntro/PageIntro"

export default function EmployeeCards({data, colorSwap}) {

    return (
        <div className={`${styles.cardWrapper} ${colorSwap && styles.colorSwapBg}`}>
            <PageIntro colorSwap={colorSwap ? true : false} heading="TRÆNERE" subheading={"VORES HOLD AF EKSPERTER"}/>
            {data.map((employee) => {
                return(
                    <EmployeeCard 
                    key={employee._id} 
                    image={employee.image}
                    name={employee.name}
                    area={employee.area}
                    colorSwap={colorSwap ? true : false}/>
                )
            })}
        </div>
    )

}