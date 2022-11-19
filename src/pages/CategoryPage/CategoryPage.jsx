import { useLoaderData } from "react-router-dom"
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview"

function CategoryPage() {
  const { collectionList } = useLoaderData()

  return (
    <div className="category-page">
      <CollectionPreview
        dataItem={collectionList}
        className="category-page__collection-preview"
      />
    </div>
  )
}

export default CategoryPage
