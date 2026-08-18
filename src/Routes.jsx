import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./pages/Home";

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route
          index
          element={<Home/>}
        />
    )
)

export default routes