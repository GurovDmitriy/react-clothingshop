import classNames from "classnames"
import CollectionPreviewList from "../CollectionPreviewList/CollectionPreviewList"
import "./style.scss"

function CollectionPreview(props: CollectionPreviewProps) {
  const { entities, className, handlerAddToCart } = props

  const collectionEntities = renderCollectionEntities()
  const collectionClass = classNames("collection-preview", className)

  function renderCollectionEntities() {
    let component = null

    if (entities && entities.length) {
      component = getCollectionEntities()
    }

    return component
  }

  function getCollectionEntities() {
    return entities.map((item) => {
      return (
        <CollectionPreviewList
          key={item.id}
          entities={item}
          handlerAddToCart={handlerAddToCart}
        />
      )
    })
  }

  return <div className={collectionClass}>{collectionEntities}</div>
}

type CollectionPreviewItems = {
  id: string | number
  name: string
  imageUrl: string
  price: number
}

type CollectionPreviewEntities = {
  id: string | number
  title: string
  routeName: string
  items: Array<CollectionPreviewItems>
}

type CollectionPreviewProps = {
  entities: Array<CollectionPreviewEntities>
  className: string
  handlerAddToCart: (cartItem: any) => Promise<void>
}

export default CollectionPreview
