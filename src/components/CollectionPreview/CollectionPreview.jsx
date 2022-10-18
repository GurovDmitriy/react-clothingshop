import PropTypes from "prop-types"
import "./styles.scss"
import CollectionPreviewList from "../CollectionPreviewList/CollectionPreviewList"

function CollectionPreview({ dataItem }) {
  const collectionPreviewList = getCollectionPreviewList(dataItem)

  return <div className="collection-preview">{collectionPreviewList}</div>
}

function getCollectionPreviewList(dataItem) {
  return dataItem.map((item) => {
    return <CollectionPreviewList key={item.id} dataItem={item} />
  })
}

CollectionPreview.defaultProps = {
  dataItem: [],
}

CollectionPreview.propTypes = {
  dataItem: PropTypes.array,
}

export default CollectionPreview
