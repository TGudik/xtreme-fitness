import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

/* Pages imports */
import Home from "./pages/Home";
import About from "./pages/About";
import AppLayout from "./components/appLayout/AppLayout";
import Services from "./pages/Services";
import Employees from "./pages/Employees";
import Subscriptions from "./pages/Subscriptions";

/* Dataloader imports */
import { aboutPageLoader, blogById, employeePageLoader, homeLoader, servicePageLoader, subscriptionsPageLoader } from "./loaders/Dataloaders";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import Backoffice from "./pages/Backoffice";

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<AppLayout />}>
            <Route
                index
                element={<Home />}
                loader={homeLoader}
            />
            <Route 
                path="blog/:id"
                element={<Blog />}
                loader={blogById}/>
            <Route 
                path="om"
                element={<About />}
                loader={aboutPageLoader}
            />
            <Route 
                path="tjenester"
                element={<Services />}
                loader={servicePageLoader}
            />
            <Route 
                path="medarbejdere"
                element={<Employees />}
                loader={employeePageLoader}
            />
            <Route 
                path="priser"
                element={<Subscriptions />}
                loader={subscriptionsPageLoader}
            />
            <Route
                path="login"
                element={<Login />}
            />
            <Route 
                path="backoffice" 
                element={<ProtectedRoute />}
            >
                <Route
                    index
                    element={<Backoffice />}
                />
            </Route>
        </Route>
    )
)

export default routes