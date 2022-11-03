import { createBrowserRouter } from "react-router-dom"
import CategoryPage, {
  loader as categoryLoader,
} from "../pages/CategoryPage/CategoryPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import HomePage from "../pages/HomePage/HomePage"
import IndexPage, { loader as rootLoader } from "../pages/IndexPage/IndexPage"
import ShopPage, { loader as shopLoader } from "../pages/ShopPage/ShopPage"
import SignPage from "../pages/SignPage/SignPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <IndexPage />,
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
])

export default router
