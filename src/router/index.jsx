import { createBrowserRouter } from "react-router-dom"
import { fetchCategory as rootLoader } from "../api/category"
import {
  fetchShopCollection as collectionLoader,
  fetchShopItems as shopLoader,
} from "../api/shop"
import AboutLayout from "../layouts/AboutLayout/AboutLayout"
import HomeLayout from "../layouts/HomeLayout/HomeLayout"
import AboutPage from "../pages/AboutPage/AboutPage"
import CartPage from "../pages/CartPage/CartPage"
import CategoryPage from "../pages/CategoryPage/CategoryPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import HomePage from "../pages/HomePage/HomePage"
import ShopPage from "../pages/ShopPage/ShopPage"
import SignPage from "../pages/SignPage/SignPage"

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
    ],
  },
])

export default router
