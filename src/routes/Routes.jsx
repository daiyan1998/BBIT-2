import Main from "@/layout/Main";
import AboutPage from "@/pages/about/AboutPage";
import ContactPage from "@/pages/contact/ContactPage";
import HomePage from "@/pages/home/HomePage";
import ProductPage from "@/pages/product/ProductPage";
import ServicePage from "@/pages/service/ServicePage";
import ServiceDetailsPage from "@/pages/serviceDetails/ServiceDetailsPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/services",
        element: <ServicePage />,
      },
      {
        path: "/services/:details",
        element: <ServiceDetailsPage />,
      },
      
      {
        path: "/products",
        element: <ProductPage />,
      },
    ],
  },
]);

export default router;
