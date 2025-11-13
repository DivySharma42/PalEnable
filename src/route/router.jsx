import RootLayout from "@/layout/root";
import About from "@/pages/about";
import Blog from "@/pages/blog";
import Home from "@/pages/home";
import HomeTwo from "@/pages/home-two";
import Portfolio from "@/pages/portfolio";
import Services from "@/pages/services";
import Team from "@/pages/team";
import { createBrowserRouter } from "react-router-dom";
import Contact from "@/pages/contact";
import Login from "@/pages/login";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home-two",
                element: <HomeTwo />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/portfolio",
                element: <Portfolio />
            },

            {
                path: "/services",
                element: <Services />
            },

            {
                path: "/team",
                element: <Team />
            },

            {
                path: "/blog",
                element: <Blog />
            },

            {
                path: "/contact",
                element: <Contact />
            },
        ]
    },
    {
        path:"/login",
        element:<Login/>
    }
])
