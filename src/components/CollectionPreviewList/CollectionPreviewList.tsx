import classNames from "classnames"
import { Link } from "react-router-dom"
import { CollectionPreviewItemEntities, ShopItem } from "../../api/shop/data"
import CollectionPreviewItem from "../CollectionPreviewItem/CollectionPreviewItem"
import "./style.scss"

function CollectionPreviewList(props: CollectionPreviewListProps) {
  const { entities, className, handlerAddToCart } = props

  const collectionClass = classNames("collection-preview-list", className)

  const collectionEntities = renderCollectionEntities()

  function renderCollectionEntities() {
    let component = null

    if (entities && entities.items && entities.items.length) {
      component = getCollectionEntities()
    }

    return component
  }

  function getCollectionEntities() {
    return entities.items.map((item) => {
      return (
        <CollectionPreviewItem
          entities={item}
          key={item.id}
          handlerAddToCart={handlerAddToCart}
        />
      )
    })
  }

  return (
    <div className={collectionClass}>
      <Link className="collection-preview-list__title" to={entities.routeName}>
        {entities.title}
      </Link>
      <div className="collection-preview-list__preview">
        {collectionEntities}
      </div>
    </div>
  )
}

type CollectionPreviewListProps = {
  entities: {
    title: string
    routeName: string
    items: Array<ShopItem>
  }
  className?: string
  handlerAddToCart: (cartItem: CollectionPreviewItemEntities) => Promise<void>
}

export default CollectionPreviewList
