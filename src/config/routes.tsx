import { Navigate, RouteObject } from "react-router-dom";
import Homepage from "@/domain/home/index";
import Layouts from "@/domain";
import AboutUs from "@/domain/about-us";
import Faq from "@/domain/faq";
import Contact from "@/domain/contact";
import Community from "@/domain/community";
import Privacy from "@/domain/privacy-policy";
import Disclaimer from "@/domain/disclaimer";

export default function appRouter(): RouteObject[] {
  return [
    {
      path: "/",
      element: <Navigate to="/home" />,
    },
    {
      path: "/",
      element: <Layouts />,
      children: [
        {
          path: "home",
          element: <Homepage />,
        },
        {
          path: "about",
          element: <AboutUs />,
        },
        {
          path: "community",
          element: <Community />,
        },
        {
          path: "faq",
          element: <Faq />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "privacy",
          element: <Privacy />,
        },
        {
          path: "disclaimer",
          element: <Disclaimer />,
        },
      ],
    },
  ];
}
