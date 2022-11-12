import { createBrowserRouter } from "react-router-dom"
import AboutLayout from "../layouts/AboutLayout/AboutLayout"
import HomeLayout from "../layouts/HomeLayout/HomeLayout"
import AboutPage from "../pages/AboutPage/AboutPage"
import CategoryPage, {
  loader as categoryLoader,
} from "../pages/CategoryPage/CategoryPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import HomePage, { loader as rootLoader } from "../pages/HomePage/HomePage"
import ShopPage, { loader as shopLoader } from "../pages/ShopPage/ShopPage"
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
        loader: categoryLoader,
      },

      {
        path: "sign",
        element: <SignPage />,
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
