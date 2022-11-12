import classNames from "classnames"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import CollectionPreviewItem from "../CollectionPreviewItem/CollectionPreviewItem"
import "./style.scss"

function CollectionPreviewList({ dataItem, className, handleAddToCart }) {
  const classesList = classNames("collection-preview-list", className)
  const collectionPreviewItemList = dataItem.items.map((item) => {
    return (
      <CollectionPreviewItem
        dataItem={item}
        key={item.id}
        handleAddToCart={handleAddToCart}
      />
    )
  })

  return (
    <div className={classesList}>
      <Link className="collection-preview-list__title" to={dataItem.routeName}>
        {dataItem.title}
      </Link>
      <div className="collection-preview-list__preview">
        {collectionPreviewItemList}
      </div>
    </div>
  )
}

CollectionPreviewList.defaultProps = {
  dataItem: {},
}

CollectionPreviewList.propTypes = {
  dataItem: PropTypes.object,
  className: PropTypes.string,
  handleAddToCart: PropTypes.func,
}

export default CollectionPreviewList
