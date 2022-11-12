import classNames from "classnames"
import PropTypes from "prop-types"
import CollectionPreviewList from "../CollectionPreviewList/CollectionPreviewList"
import "./styles.scss"

function CollectionPreview({ dataItem, className, handleAddToCart }) {
  const classesCollections = classNames("collection-preview", className)
  const collectionsList = dataItem.map((item) => {
    return (
      <CollectionPreviewList
        key={item.id}
        dataItem={item}
        handleAddToCart={handleAddToCart}
      />
    )
  })

  return <div className={classesCollections}>{collectionsList}</div>
}

CollectionPreview.defaultProps = {
  dataItem: [],
}

CollectionPreview.propTypes = {
  dataItem: PropTypes.array,
  className: PropTypes.string,
  handleAddToCart: PropTypes.func,
}

export default CollectionPreview
