import CollectionPreviewList from "../CollectionPreviewList/CollectionPreviewList"
import PropTypes from "prop-types"
import "./styles.scss"
import classNames from "classnames"

function CollectionPreview({ dataItem, className }) {
  const classesCollections = classNames("collection-preview", className)
  const collectionPreviewList = dataItem.map((item) => {
    return <CollectionPreviewList key={item.id} dataItem={item} />
  })

  return <div className={classesCollections}>{collectionPreviewList}</div>
}

CollectionPreview.defaultProps = {
  dataItem: [],
}

CollectionPreview.propTypes = {
  dataItem: PropTypes.array,
  className: PropTypes.string,
}

export default CollectionPreview
