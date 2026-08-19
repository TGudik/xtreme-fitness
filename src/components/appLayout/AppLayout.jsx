import { Outlet, ScrollRestoration } from "react-router-dom";


export default function AppLayout() {
    
    return (
        <div>
            
            <main>
                <Outlet />
                <ScrollRestoration />
            </main>
        </div>
    )

}