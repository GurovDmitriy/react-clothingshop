import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "./styles.scss"
import CollectionPreviewItem from "../CollectionPreviewItem/CollectionPreviewItem"

function CollectionPreviewList({ dataItem }) {
  const collectionPreviewItems = getCollectionPreviewItems(dataItem)

  return (
    <div className="collection-preview-list">
      <Link className="collection-preview-list__title" to={dataItem.routeName}>
        {dataItem.title}
      </Link>
      <div className="collection-preview-list__preview">
        {collectionPreviewItems}
      </div>
    </div>
  )
}

function getCollectionPreviewItems(dataItem) {
  return dataItem.items.map((item) => {
    return <CollectionPreviewItem dataItem={item} key={item.id} />
  })
}

CollectionPreviewList.defaultProps = {
  dataItem: {},
}

CollectionPreviewList.propTypes = {
  dataItem: PropTypes.object,
}

export default CollectionPreviewList
