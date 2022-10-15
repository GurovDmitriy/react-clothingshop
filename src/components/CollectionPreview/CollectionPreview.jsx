import PropTypes from "prop-types"
import "./styles.scss"
import CollectionPreviewList from "../CollectionPreviewList/CollectionPreviewList"

function CollectionPreview(props) {
  const collectionPreviewList = getCollectionPreviewList(props)

  return <div className="collection-preview">{collectionPreviewList}</div>
}

function getCollectionPreviewList(props) {
  return props.dataItem.map((item) => {
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
