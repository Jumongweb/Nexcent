import Layout from "../component/Layout";
import Home from "../pages/Home";

export const ROUTES = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "home",
                element: <Home/>
            }

        ]
    }
]