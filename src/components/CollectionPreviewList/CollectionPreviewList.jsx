import classNames from "classnames"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import CollectionPreviewItem from "../CollectionPreviewItem/CollectionPreviewItem"
import "./style.scss"

function CollectionPreviewList({ entities, className, handleAddToCart }) {
  function renderCollectionEntities() {
    return entities.items.map((item) => {
      return (
        <CollectionPreviewItem
          entities={item}
          key={item.id}
          handleAddToCart={handleAddToCart}
        />
      )
    })
  }

  const collectionClass = classNames("collection-preview-list", className)

  return (
    <div className={collectionClass}>
      <Link className="collection-preview-list__title" to={entities.routeName}>
        {entities.title}
      </Link>
      <div className="collection-preview-list__preview">
        {renderCollectionEntities()}
      </div>
    </div>
  )
}

CollectionPreviewList.defaultProps = {
  entities: {},
}

CollectionPreviewList.propTypes = {
  entities: PropTypes.object,
  className: PropTypes.string,
  handleAddToCart: PropTypes.func,
}

export default CollectionPreviewList
