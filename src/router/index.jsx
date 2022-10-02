import PageHome, { loader as rootLoader } from "../pages/PageHome/PageHome"
import PageCategory, {
  loader as categoryLoader,
  action as categoryAction,
} from "../pages/PageCategory/PageCategory"
import PageCategoryDetails, {
  loader as detailsLoader,
} from "../pages/PageCategoryDetails/PageCategoryDetails"
import PageError from "../pages/PageError/PageError"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageHome />,
    errorElement: <PageError />,
    loader: rootLoader,
  },
  {
    path: "/:category",
    element: <PageCategory />,
    loader: categoryLoader,
    action: categoryAction,
  },
  {
    path: "/:category/:categoryId",
    element: <PageCategoryDetails />,
    loader: detailsLoader,
  },
])

export default router
