import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import Resume from "../pages/Resume/Resume";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: 'resume',
                element: <Resume></Resume>
            },
            {
                path: 'projects',
                loader: () => fetch('https://portfolio-server-site.vercel.app/projects'),
                element: <Projects></Projects>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
        ]
    }
])