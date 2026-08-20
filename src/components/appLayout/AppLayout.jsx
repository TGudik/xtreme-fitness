import { Outlet, ScrollRestoration } from "react-router-dom";
import Navigation from "../navigation/Navigation";


export default function AppLayout() {
    
    return (
        <div>
            <Navigation />
            <main>
                <Outlet />
                <ScrollRestoration />
            </main>
        </div>
    )

}