import classNames from "classnames"
import PropTypes from "prop-types"
import CollectionPreviewList from "../CollectionPreviewList/CollectionPreviewList"
import "./style.scss"

function CollectionPreview({ entities, className, handleAddToCart }) {
  const renderCollectionEntities = () => {
    return entities.map((item) => {
      return (
        <CollectionPreviewList
          key={item.id}
          entities={item}
          handleAddToCart={handleAddToCart}
        />
      )
    })
  }

  const collectionClass = classNames("collection-preview", className)

  return <div className={collectionClass}>{renderCollectionEntities()}</div>
}

CollectionPreview.defaultProps = {
  entities: [],
}

CollectionPreview.propTypes = {
  entities: PropTypes.array,
  className: PropTypes.string,
  handleAddToCart: PropTypes.func,
}

export default CollectionPreview
