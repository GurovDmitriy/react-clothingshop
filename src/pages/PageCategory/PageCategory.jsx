import shopCollections from "./data"
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview"
import { useLoaderData } from "react-router-dom"

export async function loader(props) {
  const collectionList = await new Promise((resolve) => {
    const data = shopCollections.filter(
      (item) => item.routeName === props.params.category
    )
    resolve(data)
  })

  return { collectionList }
}

function PageCategory() {
  const { collectionList } = useLoaderData()

  return (
    <div className="page-category">
      <CollectionPreview
        dataItem={collectionList}
        className="page-category__collection-preview"
      />
    </div>
  )
}

export default PageCategory
