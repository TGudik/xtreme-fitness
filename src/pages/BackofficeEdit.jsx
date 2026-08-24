import { useLoaderData } from "react-router-dom";
import Hero from "../components/header/Hero";
import OfficeEdit from "../components/officeEdit/OfficeEdit";

export default function BackofficeEdit() {
    const blogs = useLoaderData()

    return( 
        <div>
            <Hero title="REDIGER" />
            <OfficeEdit blogs={blogs} />
        </div>
    )

}