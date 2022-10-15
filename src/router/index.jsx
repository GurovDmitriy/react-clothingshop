import PageHome, { loader as rootLoader } from "../pages/PageHome/PageHome"
import PageError from "../pages/PageError/PageError"
import { createBrowserRouter } from "react-router-dom"
import PageShop, { loader as shopLoader } from "../pages/PageShop/PageShop"
import PageCategory, {
  loader as categoryLoader,
} from "../pages/PageCategory/PageCategory"

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageHome />,
    errorElement: <PageError />,
    loader: rootLoader,
  },
  {
    path: "/shop",
    element: <PageShop />,
    loader: shopLoader,
  },
  {
    path: "/shop/:category",
    element: <PageCategory />,
    loader: categoryLoader,
  },
])

export default router
