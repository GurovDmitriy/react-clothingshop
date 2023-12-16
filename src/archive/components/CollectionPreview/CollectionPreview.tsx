import classNames from "classnames"
import { CollectionPreviewItemEntities, Shop } from "../../api/shop/data"
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

type CollectionPreviewProps = {
  entities: Array<Shop>
  className: string
  handlerAddToCart: (cartItem: CollectionPreviewItemEntities) => Promise<void>
}

export default CollectionPreview
