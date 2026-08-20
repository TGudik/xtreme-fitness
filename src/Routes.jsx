import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

/* Pages imports */
import Home from "./pages/Home";
import About from "./pages/About";
import AppLayout from "./components/appLayout/AppLayout";
import Services from "./pages/Services";
import Employees from "./pages/Employees";
import Subscriptions from "./pages/Subscriptions";

/* Dataloader imports */
import { employeesLoader } from "./loaders/Dataloaders";

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<AppLayout />}>
            <Route
                index
                element={<Home />}
            />
            <Route 
                path="om"
                element={<About />}
            />
            <Route 
                path="tjenester"
                element={<Services />}
            />
            <Route 
                path="medarbejdere"
                element={<Employees />}
                loader={employeesLoader}
            />
            <Route 
                path="priser"
                element={<Subscriptions />}
            />
        </Route>
    )
)

export default routes