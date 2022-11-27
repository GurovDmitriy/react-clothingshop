import classNames from "classnames"
import { Link } from "react-router-dom"
import CollectionPreviewItem from "../CollectionPreviewItem/CollectionPreviewItem"
import "./style.scss"

CollectionPreviewList.defaultProps = {
  entities: {},
}

type CollectionPreviewListItems = {
  id: string | number
  name: string
  price: number
  imageUrl: string
}

type CollectionPreviewListProps = {
  entities: {
    title: string
    routeName: string
    items: Array<CollectionPreviewListItems>
  }
  className?: string
  handlerAddToCart: () => void
} & typeof CollectionPreviewList.defaultProps

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

export default CollectionPreviewList
