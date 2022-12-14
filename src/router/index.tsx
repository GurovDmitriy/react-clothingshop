import { lazy } from "react"
import { createBrowserRouter } from "react-router-dom"
import { fetchCategory as rootLoader } from "../api/category/category"
import {
  fetchCollectionList as collectionLoader,
  fetchShopItems as shopLoader,
} from "../api/shop/shop"
import AboutLayout from "../layouts/AboutLayout/AboutLayout"
import HomeLayout from "../layouts/HomeLayout/HomeLayout"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import HomePage from "../pages/HomePage/HomePage"

const AboutPage = lazy(() => import("../pages/AboutPage/AboutPage"))
const CartPage = lazy(() => import("../pages/CartPage/CartPage"))
const CategoryPage = lazy(() => import("../pages/CategoryPage/CategoryPage"))
const ContactPage = lazy(() => import("../pages/ContactPage/ContactPage"))
const ShopPage = lazy(() => import("../pages/ShopPage/ShopPage"))
const SignPage = lazy(() => import("../pages/SignPage/SignPage"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <HomePage />,
        loader: rootLoader,
      },

      {
        path: "shop",
        element: <ShopPage />,
        loader: shopLoader,
      },

      {
        path: "shop/:category",
        element: <CategoryPage />,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        loader: collectionLoader,
      },

      {
        path: "sign",
        element: <SignPage />,
      },

      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },

  {
    path: "/about",
    element: <AboutLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <AboutPage />,
      },

      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
])

export default router
