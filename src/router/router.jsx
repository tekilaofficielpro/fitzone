import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Classes from "../pages/niniPages/Classes";
import Coaches from "../pages/niniPages/Coaches";
import Pricing from "../pages/niniPages/Pricing";
import Contact from "../pages/niniPages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/classes",
                element: <Classes />
            },
            {
                path: "/coaches",
                element: <Coaches />
            },
            {
                path: "/pricing",
                element: <Pricing />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    }
])

export default router;