import { createBrowserRouter } from "react-router-dom"
import PageIndex from "../pages/PageIndex/PageIndex"
import PageHome, { loader as rootLoader } from "../pages/PageHome/PageHome"
import PageError from "../pages/PageError/PageError"
import PageShop, { loader as shopLoader } from "../pages/PageShop/PageShop"
import PageCategory, {
  loader as categoryLoader,
} from "../pages/PageCategory/PageCategory"
import PageSign from "../pages/PageSign/PageSign"

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageHome />,
    errorElement: <PageError />,

    children: [
      {
        index: true,
        element: <PageIndex />,
        loader: rootLoader,
      },

      {
        path: "shop",
        element: <PageShop />,
        loader: shopLoader,
      },

      {
        path: "shop/:category",
        element: <PageCategory />,
        loader: categoryLoader,
      },

      {
        path: "sign",
        element: <PageSign />,
      },
    ],
  },
])

export default router
