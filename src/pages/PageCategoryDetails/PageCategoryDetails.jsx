import { useLoaderData } from "react-router-dom"
import { listItems as itemsDetails } from "../PageCategory/data"

export async function loader(props) {
  const itemDetails = await new Promise((resolve) => {
    const category = itemsDetails.find((item) => {
      return item.category.toLowerCase() === props.params.category
    })
    const categoryDetails = category.items.find(
      (item) => item.id.toString() === props.params.categoryId
    )
    resolve(categoryDetails)
  })

  return { itemDetails }
}

function PageCategoryDetails() {
  const { itemDetails } = useLoaderData()

  return (
    <div className="page-category">
      <div>{itemDetails.details.caption}</div>
      <div>{itemDetails.details.description}</div>
    </div>
  )
}

export default PageCategoryDetails
